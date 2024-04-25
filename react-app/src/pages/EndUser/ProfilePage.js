import React, { useEffect } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import words from "../../words";

import './ProfilePage.css'

export default function ProfilePage(){
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.profile.title;
    }, [])
    return(
        <div id="profile-page" className="mt-nav flex-row">
            <div className="left">
                <div className="img-wrapper">
                    <img src={process.env.PUBLIC_URL + `/img/profile.jpg`}/>
                </div>
                <div className="text-wrapper">
                    <div>
                        <div className="title medium mb-s">{words.terms.profile.name}</div>
                        <div className="job">{words.terms.profile.job}</div>
                    </div>
                    <p>{words.terms.profile.bio}</p>
                </div>
            </div>
            <div className="right">
                <div className="header mb-xl">
                    <div className="title large py-m">{words.terms.profile.title}</div>
                </div>
                <div className="body">
                    <div className="writer-wrapper">
                        <div className="title medium color-white">{words.terms.profile.writer}</div>
                        <div className="p-wrapper">
                            <p>
                            業績: 公務員時代に役員クラスのスピーチや寄稿文を800本以上執筆。「さすが役員の」ともらった人が感動する文章を書くために、小さくても心に残るエピソードをヒアリングするようになった。その後、オーストラリアへ移住。１０年後に帰国して、士業を中心に「難しいことを誰でもわかるようにかみ砕いて書く」ライティングが好評に。挨拶や寄稿文からブログ、YouTubeの原稿までを幅広く書く。いずれも「わかりやすい」「楽に読める」「思いが伝わる」と好評。現在は執筆協力も手がける。
                            </p>
                            <p>
                            執筆のハイライト: <br/>
                            ・依頼主の思いを大切にするため、できるだけヒアリングをして、思いを深堀りする。これにより読み手が依頼主を身近に感じ、また、文章に厚みと説得力を持たせる。<br/>
                            ・読み手を意識して、そのターゲットにあわせた書き方に調整できる。<br/>
                            ・読み手が疲れないよう「わかりやすく読みやすい」文にしながら、情景が浮かぶような文章を書く。
                            </p>
                        </div>
                    </div>
                    <div className="coach-wrapper">
                        <div className="title medium color-white">{words.terms.profile.coach}</div>
                        <div className="p-wrapper">
                            <p>
                            業績: ６年でのべ500人以上に「文章の書き方レッスン」を提供。対話を通して、本当に伝えたい思いを伝わる文章にする「早稲田対話式ライティング・コーチ®」の手法で無理なく、楽しく文章が書けるようになった人が続出
                            </p>
                            <p>
                            執筆のハイライト: <br/>
                            ・現在、都内私立女子中高一貫校で、非常勤講師。<br/>
                            「自己表現のための『書く』」クラスを3年連続で担当。<br/>
                            ・マイナビ様等、大手企業の新人研修で「伝わる書き方」を多数担当。<br/>
                            ・ベンチャー企業様からの依頼で、社員の発信力向上のための書き方レッスン多数。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


