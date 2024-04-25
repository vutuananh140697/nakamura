import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm";
import words from "../../words";
import { removeOldImg } from "./CreateReview";

export default function EditReview(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState(null);
    const {id} = useParams();
    const validation = inputs.name !== undefined && inputs.message !== undefined && inputs.cover !== undefined && inputs.name !== '' && inputs.message !== ''

    useEffect(() => {
        getReview(id)
    }, [id]);
  
    function getReview(id) {
        axios.get(words.api.admin.review.detail(id)).then(function(response) {
            setInputs(response.data);
        });
    }
    
    const hiddenFileInput = useRef(null);

    const handleTextChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleCoverChange = event => {
        const fileUploaded = event.target.files[0];
        if(inputs.cover) axios.get(`${words.api.admin.file.remove(inputs.cover)}`).catch((error) => console.log(error))
        const body = new FormData();
        body.append("file", fileUploaded);
        fetch(`${words.api.admin.file.post}`, {
            method: "post",
            body: body
        })
        .then(response => response.json())
        .then((result) => {
            setInputs(values => ({...values, ["cover"]: result.filename}));
        })
      };

    const handleClick = event => {
        hiddenFileInput.current.click();
      }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(words.api.admin.review.update(id), inputs).then(function(response){
            navigate('/admin/reviewManage');
        }).catch((error) => setError(error));   
    }

    return (
        <ReviewForm
            inputs={inputs}
            setInputs={setInputs}
            error={error}
            validation={validation}
            category={inputs.category}
            hiddenFileInput={hiddenFileInput}
            handleTextChange={handleTextChange}
            handleCoverChange={handleCoverChange}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            handleRemoveOldImg={removeOldImg}
            isEdit
        />
  );
}