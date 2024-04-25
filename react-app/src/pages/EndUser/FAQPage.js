import React, { useEffect } from "react";
import words from "../../words";
import AccordionItem from "../../components/AccordionItem";

export default function FAQPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.faq.title;
    }, [])
    return(
        <div id="faq-page" className="mt-nav mb-100">
            <div className="header text-align-ct">
                <div className="title large py-m">{words.terms.faq.title}</div>
            </div>
            <div className="container">
                <AccordionItem 
                    question="テキストや教材を購入する必要はありますか。"
                    answer="決まったテキストや教材はありません。クライアントに必要なワークを、その都度PDFまたは印刷したものでお渡ししています。"
                />
                <AccordionItem 
                    question="毎回のセッションはどのように進めますか。"
                    answer="
                    クライアントの状況によって進め方は毎回異なりますが、標準的な流れは次のようになります。
                    ・前回から今回のセッションまでどのように過ごしたかの振り返り
                    ・前回のセッションで決めた課題の振り返り
                    ・セッションのテーマについて対話により深く掘り下げる
                    ・解決したい問題について対話により認識を深める
                    ・次回のセッションまでの課題を決める
                    必要に応じて、こちらからティーチング（知識のインプット）、トレーニング（実践的なセッション）をご提案する場合もあります。"
                />
            </div>
        </div>
    )
}


