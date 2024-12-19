body {
    margin: 0;
    font-family: 'Press Start 2P', cursive;
    background-color: #202040;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    -webkit-font-smoothing: none;
    image-rendering: pixelated;
}

.container {
    width: 90%;
    max-width: 800px;
    background-color: #303060;
    border: 8px solid #00ffcc;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 0 20px #00ffcc;
    overflow: hidden;
}

h1,
h2 {
    color: #00ffcc;
    text-shadow: 2px 2px 0 #101030, -2px -2px 0 #101030;
}

form {
    background-color: #404070;
    padding: 16px;
    border: 4px solid #ff00aa;
    border-radius: 12px;
    box-shadow: 0 0 10px #ff00aa;
}

form input,
form textarea {
    width: calc(100% - 20px);
    padding: 8px;
    margin-bottom: 8px;
    border: 4px solid #00ffcc;
    border-radius: 8px;
    background-color: #202040;
    color: #ffffff;
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    resize: none;
    outline: none;
    box-sizing: border-box;
}

form input:focus,
form textarea:focus {
    border-color: #ff00aa;
}

form button {
    width: 100%;
    padding: 8px;
    border: 4px solid #00ffcc;
    border-radius: 8px;
    background-color: #202040;
    color: #00ffcc;
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
}

form button:hover {
    background-color: #00ffcc;
    color: #202040;
}

#posts {
    background-color: #404070;
    padding: 16px;
    border: 4px solid #ff00aa;
    border-radius: 12px;
    margin-top: 16px;
    overflow: hidden;
}

#postsContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
}

#posts h2 {
    color: #ff00aa;
}

.post {
    background-color: #202040;
    border: 4px solid #00ffcc;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 8px;
    word-wrap: break-word;
    box-sizing: border-box;
}

.post h3 {
    margin: 0 0 8px 0;
}

.post p {
    margin: 0;
    text-align: left;
}

.post button {
    margin-top: 8px;
    border: 4px solid transparent;
    border-radius: 8px;
    background-color: #202040;
    color: #ffffff;
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    cursor: pointer;
    padding: 8px 16px;
    transition: all 0.3s;
    box-shadow: 0 0 10px #00ffcc;
}

.post button:hover {
    background-color: #00ffcc;
    color: #202040;
    border-color: #ff00aa;
    box-shadow: 0 0 20px #ff00aa;
}

* {
    box-sizing: border-box;
    image-rendering: pixelated;
}
