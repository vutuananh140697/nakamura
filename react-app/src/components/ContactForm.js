import React, { useState } from "react";
import axios from "axios";
import words from "../words";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import './ContactForm.css'

export default function ContactForm(){
    const [succeed,setSucceed] = useState(false);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        title: "",
        message: ""
      };

    const contactSchema = Yup.object().shape({
        name: Yup.string().required(words.validation.mandatoryError),
        email: Yup.string().email().required(words.validation.mandatoryError),
        phone: Yup.string().matches(/^[0-9]+$/, words.validation.numberError),
        title: Yup.string().required(words.validation.mandatoryError),
        message: Yup.string().required(words.validation.mandatoryError)
    });

    const handleSubmit = (values) => {
        axios.post(words.api.admin.letter.add, values).then(function(response){
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
                validationSchema={contactSchema} 
                onSubmit={(values,{resetForm}) => { setLoading(true); handleSubmit(values); resetForm()}}
            >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                    <div className="contact-form max-w-900 px-7pc text-align-ct">
                        {(!succeed && !error && !loading) &&
                            <Form className="body flex-column gap-s mx-auto">
                                <div className="form-row">
                                    <label htmlFor="name" className="mandatory">{words.terms.contact.name}</label>
                                    <Field type="text" name="name" id="name" placeholder="すずきめい" className={errors.lastname && touched.lastname ? "input-error w-100pc" : "w-100pc"}/>
                                    <ErrorMessage name="name" component="span" className="error" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email" className="mandatory">{words.terms.contact.mailaddress}</label>
                                    <Field type="email" name="email" id="email" placeholder="suzuki.mei@gmail.com" className={errors.email && touched.email ? "input-error w-100pc" : "w-100pc"}/>
                                    <ErrorMessage name="email" component="span" className="error" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="phone">{words.terms.contact.phone}</label>
                                    <Field type="text" name="phone" id="phone" placeholder="070-1234-5678"　className={errors.phone && touched.phone ? "input-error w-100pc" : "w-100pc"}/>
                                    <ErrorMessage name="phone" component="span" className="error" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="title" className="mandatory">{words.terms.contact.formtitle}</label>
                                    <Field type="text" name="title" id="title" placeholder="メッセージのタイトル"　className={errors.title && touched.title ? "input-error w-100pc" : "w-100pc"}/>
                                    <ErrorMessage name="title" component="span" className="error" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="message" className="mandatory">{words.terms.contact.message}</label>
                                    <Field  as="textarea"  type="text" name="message" id="message" placeholder="メッセージの内容"　className={errors.message && touched.message ? "input-error w-100pc" : "w-100pc"}/>
                                    <ErrorMessage name="message" component="span" className="error" />
                                </div>
                                <button type="submit" className={"primary gray mt-m"} >{words.button.formsubmit}</button>
                            </Form>
                        }
                        {succeed &&
                            <div className="actMsg mb-w-100pc px-5pc py-m" >
                                <div className="flex-column-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/check-circle.svg`} style={{width:"64px"}}/>
                                    <p className="text-align-ct">メッセージを送りました。<br/>
                                    どうもありがとうございます。</p>
                                </div>
                                <button name="back" className="mt-base" onClick={() => setSucceed(false)}>フォームに戻る</button>
                            </div>
                        }
                        {error &&
                            <div className="actMsg mb-w-100pc px-5pc py-m">
                                <div className="flex-column-ct gap-base">
                                    <img src={process.env.PUBLIC_URL + `/img/icon/alert-circle.svg`} style={{width:"64px"}}/>
                                    <p className="text-align-ct">エラーが発生しました。<br/>
                                    インターネット接続を確認してください。</p>
                                </div>
                                <button name="back" className="mt-base" onClick={() => setError(false)}>フォームに戻る</button>
                            </div>
                        }
                        {loading &&
                        <div className="loading-wrapper">
                            <div className="spark p42 mb-base"></div>
                            <div>Loading...</div>
                        </div>
                        }
                    </div>
                );
            }}
            </Formik>
    )
}