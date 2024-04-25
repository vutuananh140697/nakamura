import React, { useState } from "react";
import axios from "axios";
import words from "../words";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import './Footer.css'

export default function SubscribeForm(){
    const [succeed,setSucceed] = useState(false);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);

    const initialValues = {
        email: ""
      };

    const subscribeSchema = Yup.object().shape({
        email: Yup.string().email().required(words.validation.mandatoryError),
    });

    const handleSubmit = (values) => {
        axios.post(words.api.admin.subscriber.add, values).then(function(response){
            setLoading(false);
            setSucceed(true);
        }).catch(error => { 
            setLoading(false);
            setError(true)
        }) 
    }
    
    return(
        <Formik 
            initialValues={initialValues} 
            validationSchema={subscribeSchema} 
            onSubmit={(values,{resetForm}) => { setLoading(true); handleSubmit(values); resetForm()}}
        >
            {(formik) => {
                const { errors, touched } = formik;
                return (
                    <div className="newsletter flex-row-ct justify-space-btw">
                        <div className='text'>
                            <img src={process.env.PUBLIC_URL + `/img/newsletter-to-your-inbox.svg`}/>
                        </div>
                        {(!succeed && !error && !loading) &&
                            <Form>
                                <div className="touroku-box">
                                    <Field type="email" name="email" id="email" placeholder="メールアドレス" 
                                        className={errors.email && touched.email ? "input-error w-100pc" : "w-100pc"}/>
                                    <button type="submit" name="add" className="primary primary yellow">登録</button>
                                </div>
                                <ErrorMessage name="email" component="span" className="error color-yellow" />
                            </Form>
                        }
                        {succeed &&
                            <div className="actMsg mb-w-100pc px-5pc" >
                                <p className="text-align-ct">ご登録いただきありがとうございました!</p>
                                <div className="flex-row-ct justify-space-btw my-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/check-circle-light.svg`} style={{width:"64px"}}/>
                                    <button name="back" onClick={() => setSucceed(false)}>戻る</button>
                                </div>
                            </div>
                        }
                        {error &&
                            <div className="actMsg mb-w-100pc px-5pc" >
                                <p className="text-align-ct">エラーが発生しました。<br/>
                                    インターネット接続を確認してください。</p>
                                <div className="flex-column-ct justify-space-btw my-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/alert-circle-light.svg`} style={{width:"64px"}}/>
                                    <button name="back" onClick={() => setError(false)}>戻る</button>
                                </div>
                            </div>
                        }
                        {loading &&
                        <div className="loading-wrapper">
                            <div>処理中...</div>
                        </div>
                        }
                    </div>
                );
            }}
        </Formik>
    )
}