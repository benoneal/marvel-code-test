# Marvel API code test 

```bash
git clone git@github.com:benoneal/marvel-code-test.git
cd marvel-code-test
yarn
cross-env MARVEL_PRIVATE_KEY=[your_private_key] MARVEL_PUBLIC_KEY=[your_public_key] npm run prod
```
Visit at [localhost:3000](http://localhost:3000)

### Note

I wanted to do something a little bit creative with this. Unfortunately the Marvel API isn't quite as flexible or powerful as I'd hoped (and very few entities even had descriptions, from what I could see). I'm happy enough with the result though, in that it is functional and not too clunky. 

Code-wise, I probably bit off more than I could easily chew in a few hours after work. I was able to dramatically accelerate what I could achieve by leveraging libraries I'd previously built for my own side projects (and this code test was just the impetus I needed to actually publish them), but the core game logic took longer to settle on than I'd have liked (again, mostly due to time spent compromising on what I wanted to do vs what the Marvel API would let me do). As a result, the code isn't as polished as I'd want. In particular: 

- there are a few view elements which should be extracted into independent components
- I haven't bothered with propTypes due to time vs iteration concerns
- I normally prefer to extract my styles into adjacent files
- I18n and a11y are non-existent
- the even/odd assignment of CharacterCard/SeriesCard components is a bit gross
- the size of the interface for the Play component is a bit of a smell, and it should probably be split
- nothing has tests
- designing as I code is not my favourite thing, and it shows

Finally, the actions, routes, and styling patterns in here are simply the way I prefer to code such things. They are using libraries I created specifically to address my preferences (freyja: styles, sleipnir: state, naglfar: routing, and fenris: isomorphism). At work I use more popular/idiomatic approaches, because speed, power, and convenience aren't as important as shared understanding in that environment. 
