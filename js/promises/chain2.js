//https://flaviocopes.com/javascript-promises/

fetch('https://api.github.com/users/iliakan')
.then((response) => {
    if (response.status === 200){
        alert(response.status);
        return response.json();
    }}
).then(r => {
    alert(JSON.stringify(r));
});

/*
{
  "login": "iliakan",
  "id": 349336,
  "node_id": "MDQ6VXNlcjM0OTMzNg==",
  "avatar_url": "https://avatars0.githubusercontent.com/u/349336?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/iliakan",
  "html_url": "https://github.com/iliakan",
  "followers_url": "https://api.github.com/users/iliakan/followers",
  "following_url": "https://api.github.com/users/iliakan/following{/other_user}",
  "gists_url": "https://api.github.com/users/iliakan/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/iliakan/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/iliakan/subscriptions",
  "organizations_url": "https://api.github.com/users/iliakan/orgs",
  "repos_url": "https://api.github.com/users/iliakan/repos",
  "events_url": "https://api.github.com/users/iliakan/events{/privacy}",
  "received_events_url": "https://api.github.com/users/iliakan/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ilya Kantor",
  "company": null,
  "blog": "https://javascript.info",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 104,
  "public_gists": 716,
  "followers": 1803,
  "following": 0,
  "created_at": "2010-07-30T14:31:35Z",
  "updated_at": "2018-12-21T19:25:42Z"
}
*/