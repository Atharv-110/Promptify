![promptify-banner](https://github.com/Atharv-110/Promptify/assets/87393095/5fcd47f6-fce6-4b6c-a2e4-358fbc1d40af)
# Promptify
> Your cutting-edge prompting tool for exploring, crafting, and sharing ingenious prompts in the modern world of creativity and AI interaction.

# What is Promptify?
1. This is a wide platform through which user can _**create, share, & discover prompts**_ to make their AI tool journey easy and robust.
2. Promptify gives user the minimalist and better experience with easy to use UI.
3. **Note:** _This is not a social media platform to make friends but to easy everyone prompting experience_

# Why Promptify? [Features]
1. **Sign in/Sign up:** Easily login or create account using your Google account.
2. **Powerful Searching:** User can search prompts through the tags, user, email or even by typing some words of the prompt.
3. **Feed:** Anyone can view, copy and use all the prompts available on the feed.
4. **Profile View:** Everyone can see what all prompts are created by a respective creator.
5. **Create Prompt:** After login, users can create and share their amazing prompts by just filling few fields.
6. **Edit Prompt:** Easy editing of the prompts after creation.
7. User will experience very minimal and easy to access & use UI.
8. _Promptify is fully responsive_, accessible through all the devices.

# Tech Stack with Description
1. **NextJS:** Promptify employs NextJS, an advanced React framework, with server-rendered pages and dynamic routing for seamless, intuitive interactions.
2. **MongoDB:** User and prompt data is vital, enhanced by MongoDB's adaptable NoSQL database.
3. **NextAuth.js:** Seamless access is ensured with integrated NextAuth.js, enabling direct Google authentication for effortless sign-ins, sign-ups, and sign-outs.
4. **Tailwind CSS:** Tailwind boasts stylish, captivating designs. Responsive components and pre-designed classes ensure user-friendly aesthetics.
5. **Vercel & Google Cloud Platform:** Promptify deploys on Vercel, optimized for Next.js, and Google Cloud's prowess for excellence.

# Folder Structure
``` bash
Tree:
root:.
|   jsconfig.json
|   next.config.js
|   package-lock.json
|   package.json
|   postcss.config.js
|   README.md
|   tailwind.config.js
|   
+---app
|   |   icon.png
|   |   layout.jsx
|   |   page.jsx
|   |   
|   +---api
|   |   +---auth
|   |   |   +---[...nextauth]
|   |   |           route.js
|   |   |           
|   |   +---prompt
|   |   |   |   route.js
|   |   |   |   
|   |   |   +---new
|   |   |   |       route.js
|   |   |   |       
|   |   |   +---[id]
|   |   |           route.js
|   |   |           
|   |   +---users
|   |       +---[id]
|   |           +---posts
|   |                   route.js
|   |                   
|   +---create-prompt
|   |       page.jsx
|   |       
|   +---profile
|   |   |   page.jsx
|   |   |   
|   |   +---[id]
|   |           page.jsx
|   |           
|   +---update-prompt
|           page.jsx
|           
+---components
|       Feed.jsx
|       Footer.jsx
|       Form.jsx
|       Nav.jsx
|       Profile.jsx
|       PromptCard.jsx
|       Provider.jsx
|       
+---models
|       prompt.js
|       user.js
|       
+---public
|   +---assets
|       +---icons
|       |       copy.svg
|       |       github-logo.png
|       |       link.svg
|       |       linkedin.png
|       |       loader.svg
|       |       menu.svg
|       |       tick.svg
|       |       twitter.png
|       |       
|       +---images
|               grid.svg
|               logo-text.svg
|               logo.svg
|               
+---styles
|       globals.css
|       
+---utils
        database.js
```
# Demonstration
https://github.com/Atharv-110/Promptify/assets/87393095/1d7d34ef-efca-4484-9f6f-a4176e731d4f

