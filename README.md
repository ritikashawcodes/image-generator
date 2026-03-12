# AI Image Generator

Turn words into stunning AI-generated art and drawings instantly. Enter a prompt and the AI image generator brings your ideas to life!

## 🌐 Live Demo
[image-generator-eight-eta.vercel.app](https://image-generator-eight-eta.vercel.app)

## 🛠 Tech Stack
* React.js
* JavaScript
* HTML
* CSS
* Hugging Face Inference API (FLUX.1-schnell model)
* Vercel Serverless Functions

## ✨ Features
* Generate stunning AI images from text prompts with a single click
* Powered by FLUX.1-schnell — a fast, high-quality image generation model
* Download your generated image for free
* Clean and responsive UI for both desktop and mobile
* Serverless backend to securely handle API calls

## ⚙️ How It Works
1. User enters a text prompt describing the image they want
2. The frontend sends the prompt to a Vercel serverless function
3. The serverless function calls the Hugging Face API securely
4. The generated image is returned and displayed instantly

## 🚀 Getting Started

### Prerequisites
* Node.js
* A Hugging Face account and API token

### Installation
1. Clone the repository
```
   git clone https://github.com/ritikashawcodes/image-generator.git
```
2. Install dependencies
```
   npm install
```
3. Create a `.env` file in the root and add your Hugging Face API token
```
   REACT_APP_API_KEY=your_huggingface_token_here
```
4. Run the app
```
   npm start
```

## 📁 Project Structure
```
image-generator/
├── api/
│   └── generate.js       # Vercel serverless function
├── src/
│   └── components/
│       └── ImageGenerator/
│           ├── ImageGenerator.jsx
│           └── ImageGenerator.css
├── public/
└── package.json
```



