import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { HashLink } from 'react-router-hash-link';

import words from "../../words";

import './ServicePage.css'

export default function ServicePage(){
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.service.title;
    }, [])
    return(
        <div id="service-page" className="mt-nav">
            <section className="intro">
                <div className="header text-align-ct">
                    <div className="title large py-m">{words.terms.service.title}</div>
                </div>
                <div className="gallery flex-row-ct">
                    <div className="item">
                        <HashLink to='/service/#writer'>
                            <div className="title medium">{words.terms.service.writer}</div>
                            <div className="img-wrapper">
                                <img src={process.env.PUBLIC_URL + `/img/service/writer.jpg`}/>
                            </div>
                        </HashLink>
                    </div>
                    <div className="item">
                        <HashLink to='/service/#ghostwriter'>
                            <div className="title medium">{words.terms.service.ghostWriter}</div>
                            <div className="img-wrapper">
                                <img src={process.env.PUBLIC_URL + `/img/service/ghostwriter.jpg`}/>
                            </div>
                        </HashLink>
                    </div>
                    <div className="item">
                        <HashLink to='/service/#coach'>
                            <div className="title medium">{words.terms.service.coach}</div>
                            <div className="img-wrapper">
                                <img src={process.env.PUBLIC_URL + `/img/service/coach.jpg`}/>
                            </div>
                        </HashLink>
                    </div>
                </div>
            </section>
            
            <section id="writer" className="container">
                <div className="wrapper">
                    <div className="title medium">{words.terms.service.writer}</div>
                    <div className="grid"> 
                        <div className="img-wrapper">
                            <img src={process.env.PUBLIC_URL + `/img/service/writer.jpg`}/>
                        </div>
                        <div className="p-wrapper">
                            <p>
                                今、人の心を動かすのは他の人の「思い」です。AIが急速に発達してもそれは変わりません。AIにはわからない、人の考えや思い。それを文章にして、他の人に届けましょう。<br/><br/>
                                あなたのことばにならない思いをヒアリングで引き出し、文章化します。まずはあなたが何を、どんな人にどう伝えたいのかを教えてください。あなたの狙った効果が上がる文章にします。<br/><br/>  
                                文章化されたあなたの思いは、読んだ人が実際にあなたに会う前から、あなたのファンになる力があります。これであなたのビジネスを強力に拡大・発展させることができるのです。<br/><br/>
                                自社WEBやパンフレットの「社長挨拶」や「会社の理念」を作ったままにしていませんか？そこで御社が新規取引先としてふさわしいかどうか判断される、とご存知でしょうか？官公庁トップのために書いてきた文章力で、これらをブラッシュアップして、御社に新しい風を吹かせます。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ghostwriter" className="container">
                <div className="wrapper">
                    <div className="title medium">{words.terms.service.ghostWriter}</div>
                    <div className="grid"> 
                        <div className="p-wrapper">
                            <p>
                            自分の実績をひとつにまとめたい。人の役に立つ情報をまとめて提供したい。そう思って電子出版される方が増えています。<br/>
                            でも記憶はあるし、話せるけれど書くのは苦手。そんなあなたのために、執筆協力者がいます。<br/>
                            執筆協力者も千差万別ですが、私は「ご一緒に書く」スタイルです。打ち合わせはZOOMですから、全国どこの方でも大丈夫です。最初の打ち合わせで、全体のお話をお伺いし、まず章立てと目次を作成します。次から全部で12～18時間かけて、文字通りご一緒に文章を作っていきます。あなたは目次に沿って、お話をするだけ。私はそれを文章にします。時にはこちらから深掘りする質問もします。そこで思い出してくださったことを、さらに付け加えてしっかりとした本にしていきます。<br/><br/>
                            読み手の心理に沿った構成で、読み手が知りたい！と思っていたことを書きつつ、あなたのビジネスのファンにすることも可能です。
                            </p>
                        </div>
                        <div className="img-wrapper">
                            <img src={process.env.PUBLIC_URL + `/img/service/ghostwriter.jpg`}/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="coach" className="container">
                <div className="wrapper">
                    <div className="title medium">{words.terms.service.coach}</div>
                    <div className="grid"> 
                        <div className="img-wrapper">
                            <img src={process.env.PUBLIC_URL + `/img/service/coach.jpg`}/>
                        </div>
                        <div className="p-wrapper">
                            <p>
                            思いはあるのに、文章にならない。Aを書こうと思ったのに、結論がBになってしまった。文章を読むのも書くのも苦手。大丈夫です。それはあなたのせいではありません。私たちは学校で「どう書いたら、読み手にあなたの気持ちがもっとよくわかってもらえるか」を習っていないから、どう書いたら良いのかわからないだけなんです。だから今からでも習えば楽しく人に伝わる文章が書けるようになります。<br/><br/>
                            あなたが書いた文章をもとに、<br/>
                            ・今のままではどう理解される可能性が高いか、を解説します<br/>
                            そして<br/>
                            ・本当に伝えたいことは何か<br/>
                            ・書いた言葉の裏にある、あなたの思いを伺いながら、あなたの文章をご一緒にブラッシュアップします<br/>
                            「どうしてそう書く方が、読み手にわかりやすいか」という理論も、もちろんお教えしながらレッスンをしていきます。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

