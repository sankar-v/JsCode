const data = [
    {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
            id: 1, name: 'Nate',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Ari', text: 'Me too!' }]
    },
    {
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
            id: 2, name: 'Ari',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
    },
    {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
            id: 1, name: 'Nate',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Ari', text: 'Me too!' }]
    },
    {
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
            id: 2, name: 'Ari',
            avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
    },
];

var user = {
    profilePromise:null,
    
    getProfile: function(){    
        if (!this.profilePromise){
            // Assume ajax() returns a promise that is eventually
            // fulfilled with {name: 'Samantha', subscribedToSpam: true}
            this.profilePromise = Promise.resolve(data);
        }
        return this.profilePromise;
    }
};

var navbar = {
    show: function (user) {
        user.getProfile()
            .then( (profile) => {
                console.log("Inside navbar");
                return profile;
            })
            .then((x) => x.map((profile)=>{
                    console.log(profile.text);
                    return;
                }
            ));
    }
};

var account = {
    show: function (user) {
        user.getProfile()
        .then( (profile) => {
            console.log("Inside account");
            return profile;
        })
        .then((x) => x.map((profile)=>{
                console.log(profile.text);
                return;
            }
        )).catch((err) => console.log(err));
}
};
navbar.show(user);
account.show(user);