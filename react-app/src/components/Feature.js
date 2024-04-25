import React from 'react';
import { Link } from 'react-router-dom';
import words from '../words';

import './Feature.css'

export default function Feature() {
    return(
        <div className='feature container four-col-grid gap-m'>
            <div className='text-wrapper-1'>
                <div className='konichiwa'>こんにちは。</div>
                <p>
                    このページをご訪問くださり、<br/>ありがとうございます。<br/><br/>
                    私は官公庁のトップのために様々なスピーチや寄稿文を8年間で800本以上書き、その後も士業を中心に「難しい内容をおばあちゃんでもわかるように書く」ことを得意としています。<br/><br/>
                    さらに、文章コーチとして、主に大人を対象に「書き方のレッスン」を提供しています。
                </p>
            </div>
            <div className='img-wrapper-1'>
                <img className='w-100pc' src={process.env.PUBLIC_URL + `/img/feature/feature_01.png`}/>
            </div>
            <div className='img-wrapper-2'>
                <img className='w-100pc' src={process.env.PUBLIC_URL + `/img/feature/feature_02.png`}/>
            </div>
            <div className='text-wrapper-2'>
                <div className='first'>
                    <div className='number'>1</div>
                    <p>
                        私の強みはもちろん最初にいきなり官公庁のトップ（市長、大臣）のために、合計８年間、<br/>
                        800本を超える様々な文章を書き続けたことがあります。
                    </p>
                </div>
                <div className='second'>
                    <div className='number'>2</div>
                    <p>
                        1つは30代から40代にかけて、オーストラリアに移住して働き、生きたことです。移民大国とはいえ、ゆるやかに人種による仕事の区別がある中で、英語力が完璧でないのは大きなマイナスでした。なにより、知っている、わかっているのにことばにできないイライラ。何も知らない人扱いされる悔しさ。これは強烈なものでした。だからライターとしても、コーチとしても「思い」を引き出すことに重点を置いています。そして思いがことばになった瞬間、どんなお客様も顔がパッと明るくなり「嬉しい！」とおっしゃいます。胸のつかえがとれたよう、という方もいます。それを味わっていただきたくて、ライターも執筆協力もコーチもしています。
                    </p>
                </div>
            </div>
            <div className='text-wrapper-3'>
                <div className='number'>3</div>
                <p>
                    もう一つは、オーストラリアに10年住んでから日本に帰国したあと、日本語教師になろうと早稲田大学大学院日本語教育科で学び、研究したことです。<br/>
                    最初は「私がオーストラリアで味わったように、わかっているのに日本語で言い表せず、悔しい思いをしている人をなんとか助けたい」という思いからの進学でした。でもその中で普段「国語」として当たり前に使っていたことばを、一旦「英語」「韓国語」「フランス語」と同じように「日本語」として客観的に研究する、という時間を過ごしました。その結果、日本語のどこが学習しにくいのか。何が難しいのか。それは何故かを自分も学ぶことができたのです。だから「こう書いた方が相手にわかりやすい文章になるのはなぜ？」と質問されても、困りません。理論的に説明できるのです。
                </p>
            </div>
            <div className='img-wrapper-3'>
                <img className='w-100pc' src={process.env.PUBLIC_URL + `/img/feature/feature_03.png`}/>
            </div>
            <div className='text-wrapper-4'>
                この3つの強みを合わせて<span className='bold'>「早稲田対話式ライティング・コーチ®」</span>という指導法ができあがりました。
            </div>
            <div className='text-wrapper-5 title large'>
                <span className='kanji'>早稲田対話式</span><span className='katakana'>ライティング・コーチ</span>
            </div>
            <div className='text-wrapper-6'>
                <p>
                    これは一人の同期生の留学生のおかげです。ある日彼女は「話せるし、聞けるし、読める。だけど日本語ってどうしてこんなに書くだけが難しいの」と涙ながらに訴えてきました。彼女のために「あなたはここで何を言いたかったの？」「じゃあ、こう書いたらどう？」と、相手を否定せず、思いや考えを聞きだし、もっと伝わる日本語表現を提案する。これを繰り返していくことで、相手も自信がつき、
                </p>
            </div>
            <div className='img-wrapper-4'>
                <img className='w-100pc' src={process.env.PUBLIC_URL + `/img/feature/feature_04.png`}/>
            </div>
            <div className='text-wrapper-7'>
                <div className='koreda'>これだ！</div>
                <p>
                    相手に質問を投げかけ、自分でも気づいていなかった、ことばの底にある思いを引き上げて、それを文章にするんだ。そうしたら、読んだ人はもっと書き手の心や思い
                    がわかる。もっと身近に感じてくれる。実際に会う前から、知っている人のように思える。私がやりたかったのは、<br/>
                    <span className='bold'>これだ！</span>と思いました。
                </p>
            </div>
            <div className='img-wrapper-5'>
                <img className='w-100pc' src={process.env.PUBLIC_URL + `/img/feature/feature_05.png`}/>
            </div>
            <div className='text-wrapper-8'>
                <div className='koushite'>こうして、私は</div>
                <div className='list'>
                    <div className='list-item'>・官公庁のトップ（市長、大臣）のために800本書いた実績</div>
                    <div className='list-item'>・思いや考えがことばにできない悔しさがわかる</div>
                    <div className='list-item'>・国語のより伝わる書き方を、理論的に説明できる</div>
                </div>
                <p>この3つの強みで、あなたのために書くことも、教えることも、一緒に考えながら書くこともするサービスを提供しています。</p>
            </div>
            <div className='divider'></div>
            <div className='text-wrapper-9'>
                <div className='first mb-base'>
                    <span className='medium-large bold float-left verticle'>あなた</span>
                    <p>の思いや考えは、ことばにしなければ誰からも理解されません。自分からも、です。だから、ぜひあなたの思いや考えを、他の人に伝えるお手伝いをさせてください。</p>
                </div>
                <div className='second'>
                    <span className='medium-large bold float-left '>私</span>
                    <p>には夢があります。世界の人がことばでわかりあい、争いの無い世の中を実現すること。神様は人間にだけ「ことば」という贈り物をくださったのです。だったらそれを使って、力によってではない、皆が幸せな世界を作りたいのです。</p>
                </div>
            </div>
            <div className='text-wrapper-10'>
                <p>満たされた人が増えれば、争いは減っていきます。私のことばの力で、あなたのビジネスの拡大や、夢の実現のお手伝いをさせてください。そして...</p>
                <div className='title'>ご一緒に争いの無い世界を実現しませんか？</div>
                <Link to={words.routes.user.contact}>
                    <button>{words.button.contact}</button>
                </Link>
            </div>
            {/* <div className='divider'></div>
            <div className='button-wrapper'>
                <Link className='seemore color-gray' to={words.routes.user.top}>{words.button.gototop}</Link>
            </div> */}
        </div>
    )
}