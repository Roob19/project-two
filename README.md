# project-two

---

| [Brewery Finder](https://brew-finder-rewb.herokuapp.com/) |
| :-: |
<img src="https://thumbs.dreamstime.com/z/beer-mug-14068286.jpg" width="200" border="10"/>
<samp>
A web app where one can lookup, add, and review or add notes about breweries.
</samp>

---

<h3 align="left">Technologies used: </h3>

| HTML | CSS | JavaScript | Node | Express | MongoDB | 
|:---:|:---:|:---:|:---:|:---:|:---:|
| Mongoose | Google <br/> oAuth | Heroku | dotenv | GitHub | Bootstrap |
|  Whimsical | ERD | Wireframing | Zoom | API | Postman |

---

<a href="https://imgur.com/JWAiTzd"><img src="https://i.imgur.com/JWAiTzd.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/JMGbqMk"><img src="https://i.imgur.com/JMGbqMk.png" title="source: imgur.com" /></a>

---

> When first visiting the site, the nav bar is comprised of the following links: 

>> ALL BREWERIES: a link that will bring you a page of all breweries in the database.

>> ~~FIND BREWERY: a link that utilizes [openbrewerydb.org](www.openbrewerydb.org) API.~~ TBD

>> LOG IN: a link that uses Google oAuth to allow the user to record, ~~edit~~, delete their submissions.
```
```
Once logged in, an authenticated user will have a new link appear in the nav bar, ADD BREWERY and can write, ~~make edits~~, or delete their reviews/notes.
```
```
An unauthenticated user can still view details and reviews of each brewery. However, they can not add, edit, or delete any reviews. 

---

Icebox: 
- [x] deploy site
- [ ] allow auth and unauth users to query API
- [ ] GPS location of user to query API
- [ ] integrate with Yelp
- [ ] integrate ordering services e.g. TotalWine, Drizzly, Bevmo
- [ ] find and implent an API that has a what's on tap json