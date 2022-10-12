let app = Vue.createApp({
    data: () => {
        return {
            tabs: {
                home: {
                        head: "Home",
                        class: "nav__item",
                    },
                about: {
                        head: "About",
                        class: "nav__item",
                    },
                contact: {
                        head: "Contact",
                        class: "nav__item",
                    },
                user: {
                        head: "Login",
                        class: "user__tab",
                    },
            },
            show: 'home',
        }
    },
    methods: {
        toggleTab(index){
            (index == 'contact') ? location.href="#footer" : this.show = index;
            console.log(index);
        },
    }
})

app.component('home__tag', {
    template: `
        <link rel="stylesheet" href="styles/home.css">
        <div v-for="(header, key, value) in headers" :key="value" :class="header.class" class="container__home-item">
            <h1>{{ header.head }}</h1>
            <span>{{ header.cost }}</span>
            <p>{{ header.description }}</p>
        </div>
    `,

    data: () => {
        return {
            headers:{
                free_packet: {
                    class: "home__style-2d free",
                    head: "Free packet", 
                    cost: "free", 
                    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae maiores sed at nesciunt deleniti molestias possimus ratione in magni iusto rem iste temporibus ducimus, maxime deserunt sunt quis! Doloremque, sed!"
                },
                bronze_packet: {
                    class: "home__style-2d bronze",
                    head: "Bronze packet", 
                    cost: "0.99$", 
                    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae maiores sed at nesciunt deleniti molestias possimus ratione in magni iusto rem iste temporibus ducimus, maxime deserunt sunt quis! Doloremque, sed!"
                },
                silver_packet: {
                    class: "home__style-2d silver",
                    head: "Silver packet", 
                    cost: "1.99$", 
                    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae maiores sed at nesciunt deleniti molestias possimus ratione in magni iusto rem iste temporibus ducimus, maxime deserunt sunt quis! Doloremque, sed!"
                },
                gold_packet: {
                    class: "home__style-2d gold",
                    head: "Gold packet", 
                    cost: "3.99$", 
                    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae maiores sed at nesciunt deleniti molestias possimus ratione in magni iusto rem iste temporibus ducimus, maxime deserunt sunt quis! Doloremque, sed!"
                },
                // class: "not-avilable",
            },
        }
    },
})

app.component('about__tag', {
    template: `
        <link rel="stylesheet" href="styles/about.css">
        <div class="container__about-item about__style-3d">
            <h1>{{ header }}</h1>
            <p>{{ description }}</p>
        </div>
    `,
    data: () => {
        return{
            header:"About Us", 
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae maiores sed at nesciunt deleniti molestias possimus ratione in magni iusto rem iste temporibus ducimus, maxime deserunt sunt quis! Doloremque, sed!",
        }
    }
})

app.component('user__tag', {
    template: `
        <link rel="stylesheet" href="styles/user.css">
        <h1>{{ form[setForm].head }}</h1>
        <form :action="setForm" :class="setForm" class="container__form">
            <input class="container__form-input" v-for="(input, key, value) in form[setForm].inputs" :key="value" :name="key" :type="input.type" :placeholder="input.holder" :value="input.value" required="required" aria-required="true" aria-invalid="true"/>
        </form>
        <p v-for="(btn, key, value) in form[setForm].btns" :key="value" @click="setForm=key" >{{ btn }}</p>
    `,
    data: () => {
        return {
            setForm: "login",
            form: {
                login: {
                    head: "Login",
                    btns:{
                        registration: "Create an account",
                        confirmation: "I forgot my password",
                    },
                    inputs:{
                        username: {type :"text", holder: "username or email"},
                        password: {type :"password", holder: "password"},
                        submit: {type :"submit"},
                    }
                },
                registration: {
                    head: "Registration",
                    btns:{
                        login: "Cancel"
                    },
                    inputs:{
                        name: {type: "text", holder: "username"},
                        username: {type: "text", holder: "username"},
                        password: {type: "password", holder: "password"},
                        password_confirmation: {type: "password", holder: "confirm your password"},
                        email: {type: "email", holder: "email"},
                        email_confirmation: {type: "email", holder: "confirm your email"},
                        submit: {type: "submit"},
                    }
                },
                confirmation: {
                    head: "Confirmation",
                    btns:{
                        login: "Cancel"
                    },
                    inputs:{
                        email: {type: "email", holder: "email"},
                        submit: {type: "submit", value: "Send"},
                    },
                }
            },
        }
    },
})

app.component('contact__tag', {
    template: `
        <div class="footer__contact">
            <h1 class="contact-item">{{ header }}</h1>
            <p class="contact-item">        
                <a>+0000000000000</a>
            </p>  
            <p class="contact-item">
                <a>+0000000000000</a>
            </p>
            <p>
                <a>{{ address }}</a>
            </p>  
        </div> 
        <form class="footer__contact-email">
            <h1>{{ header_email }}</h1>
            <div class="footer__send-email">
                <input class="footer__email-item" type="email" :placeholder="email_pleace" autocomplete="email" maxlength="45" required="required" aria-required="true" aria-invalid="true">
                <button class="footer__email-item" type="submit">{{ sender_btn }}</button>
            </div> 
            <textarea maxlength="500" class="footer__email-item" cols="30" rows="8" :placeholder="text_pleace" maxlength="155" required="required" aria-required="true"></textarea>
        </form>
    `,

    data: () => {
        return{
            header: "CONTACT US",
            address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nulla excepturi quaerat voluptatum tenetur libero nisi facilis laboriosam quasi aliquam eaque veniam mollitia, dolores aspernatur porro impedit. Accusamus, aperiam dolor!",
            header_email: "Contact with email",
            email_pleace: "Enter your email",
            text_pleace: "Enter your message",
            sender_btn: "Send",
        }
    },
})
app.mount('#app')