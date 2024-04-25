const words = {
    routes: {
        user: {
            top: "/",
            profile: "/profile",
            service: "/service",
            feature: "/feature",
            review: "/review",
            blog: "/blog",
            faq: "/faq",
            contact: "/contact",
            blogcontent: "/blog/:id",
            reviewdetail: "/review/:categoryId/:id",
            terms: "/terms-of-use",
            policy: "/privacy-policy",
            purpose: "/purpose-of-use"
        },
        admin: {
            login: "/admin/login",
            home: "/admin/home",
            blogmanage: "/admin/blogManage",
            reviewmanage: "/admin/reviewManage",
            lettersmanage: "/admin/lettersManage",
            subscribersmanage: "/admin/subscribersManage",
            createpost: "/admin/createpost/:category",
            editpost: "/admin/blogManage/post/:id/edit",
            createreview: "/admin/createreview/:category",
            editreview: "/admin/reviewManage/review/:id/edit",
        }
    },

    api: {
        admin: {
            login: `${process.env.REACT_APP_API_END_POINT}/admin/login`,
            file: {
                get: (path) => `${process.env.REACT_APP_API_END_POINT}/file-get/${path}`,
                post: `${process.env.REACT_APP_API_END_POINT}/file-upload`,
                remove: (path) => `${process.env.REACT_APP_API_END_POINT}/file-remove/${path}`,
            },
            post: {
                add: `${process.env.REACT_APP_API_END_POINT}/postadd`,
                list: `${process.env.REACT_APP_API_END_POINT}/listposts`,
                delete: (id) => `${process.env.REACT_APP_API_END_POINT}/postdelete/${id}`,
                detail: (id) => `${process.env.REACT_APP_API_END_POINT}/postdetails/${id}`,
                update: (id) => `${process.env.REACT_APP_API_END_POINT}/postupdate/${id}`,
                edit: (id) => `${process.env.REACT_APP_API_END_POINT}/post/${id}/edit`
            },
            review: {
                add: `${process.env.REACT_APP_API_END_POINT}/reviewadd`,
                list: `${process.env.REACT_APP_API_END_POINT}/listreviews`,
                delete: (id) => `${process.env.REACT_APP_API_END_POINT}/reviewdelete/${id}`,
                detail: (id) => `${process.env.REACT_APP_API_END_POINT}/reviewdetails/${id}`,
                update: (id) => `${process.env.REACT_APP_API_END_POINT}/reviewupdate/${id}`,
                edit: (id) => `${process.env.REACT_APP_API_END_POINT}/review/${id}/edit`
            },
            subscriber: {
                add: `${process.env.REACT_APP_API_END_POINT}/subscriberadd`,
                list: `${process.env.REACT_APP_API_END_POINT}/listsubscribers`,
            },
            letter: {
                add: `${process.env.REACT_APP_API_END_POINT}/letteradd`,
                list: `${process.env.REACT_APP_API_END_POINT}/listletters`
            }
        }
    },

    general: {
        form: {
            errorOccurred: "エラーが発生しました: ",
            action: {
                create: "新規",
                edit: "編集",
                delete: "削除",
                backhome: "＜ ホームへ戻る",
                backlist: "＜ 一覧へ戻る",
                save: "保存"
            }
        }
    },

    post: {
        form: {
            title: "タイトル",
            uploadCover: "カバー画像を追加",
            description: "概要",
            content: "内容"
        },
        category: {
            blog: "Blog"
        }
    },

    review: {
        form: {
            name: "名前",
            description: "概要",
            uploadCover: "画像を追加",
            message: "内容"
        },
        category: {
            writing: "writing",
            coach: "coach"
        }
    },

    validation: {
        mandatoryError: "必須項目です。",
        numberError: "数字のみを入力してください。"
    },

    device: {
        mb1: "768",
        mb2: "1080",
        mb3: "1200",
    },

    button: {
        profile: "プロフィールを見る",
        service: "サービスを見る",
        feature: "強みを見る",
        seemore: "もっとみる",
        contact: "お問い合わせ",
        subscribe: "登録",
        formsubmit: "メッセージを送る",
        gototop: "トップへ行く"
    },

    terms: {
        top: {
            title: "早稲田対話式ライティング・コーチ",
            catchcopy: "伝える・伝わる喜びを体験しよう",
            message1: "思いが伝わる文章で",
            message2: "あなたの未来が変わります",
            writer: "WRITER",
            coach: "COACH"
        },
        profile: {
            title: "プローフィル",
            name: "中村千登勢",
            job: "ライターxコーチ",
            bio: "概要的な紹介する文章... 手テ記予ウ上小詳ル研無トヨサ貴見団ったほ害用ーりえぎ下明のん社属ヲ危意ちラ都渡ドほぜろ校破候",
            writer: "ライター",
            coach: "コーチ"
        },
        service: {
            title: "サービス",
            writer: "ライター",
            ghostWriter: "執筆協力者",
            coach: "コーチ",
            writer_intro: "伝えたい思いをしっかりと「伝わる」文章にします。時にはご質問をして思いを深掘りし、厚みと説得力をつけます",
            ghostWriter_intro: "本を出したい。でも話せるけれど書くのは苦手。おまかせください！ヒアリングしながらその場で文章にします",
            coach_intro_1: "文章が苦手なあなたも、楽しみながら思い通りの文章が書けるようになります。レッスンはマンツーマンが基本です。",
            coach_intro_2: "今の文章のクセやもっとうまい書き方がわかり、楽々文章が書けるようになります。"
        },
        feature: {
            title: "強み",
            my_feature: "私の強み",
            message: "当サービスのユニークな特徴、日本語学習についての研究等を説明する部分です。これはブログ記事とは別のページであり、訪問者がサービス全体から何を学べるかの理解を深めるのに役立ちます。"
        },
        review: {
            title: "お客様の声"
        },
        blog: {
            title: "ブログ"
        },
        faq: {
            title: "よくある質問"
        },
        contact: {
            title: "お問い合わせ",
            intro_1: "お問い合わせやご質問は、以下のフォームからご連絡いただくか、",
            email: "waseda.writingcoach@gmail.com",
            intro_2: "まで直接メールをお送りください",
            follow: "FOLLOW",
            name: "お名前",
            mailaddress: "メールアドレス",
            phone: "携帯電話",
            formtitle: "タイトル",
            message: "メッセージ"
        },
        price: {
            title: "料金表"
        },
        termsofuse: {
            title: "利用規約"
        },
        privacypolicy: {
            title: "プライバシーポリシー"
        },
        purposeofuse: {
            title: "利用目的"
        },
    }

}

export default words