document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('.talk');
    const content = document.querySelector('.content');
    const chatBox = document.getElementById('conversation');

    function speak(sentence) {
        const text_speak = new SpeechSynthesisUtterance(sentence);
    
        text_speak.rate = 1;
        text_speak.pitch = 1;
    
        window.speechSynthesis.speak(text_speak);
    }
    
    function setListeningStatus(isListening) {
        content.textContent = isListening ? 'Listening...' : 'Click here to start speaking';
    }
    
    function wishMe() {
        var day = new Date();
        var hr = day.getHours();
    
        if (hr >= 0 && hr < 12) {
            speak("Good Morning sir");
        } else if (hr >= 12 && hr <= 17) {
            speak("Good noon sir");
        } else if (hr > 17 && hr <= 24) {
            speak("Good Afternoon sir");
        } else {
            speak("Good Evening sir");
        }
    }
    
    window.addEventListener('load', () => {
        speak("Activating Jarvis");
        speak("Going online");
        wishMe();
    });
    
    const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new speechRecognition();
    
    recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        speakThis(transcript.toLowerCase());
    };
    
    btn.addEventListener('click', () => {
        recognition.start();
        setListeningStatus(true);
    });
    
    function speakThis(message) {
        const speech = new SpeechSynthesisUtterance();
    
        speech.text = "I did not understand what you said. Please try again!";
    
        if (message.includes("hey") || message.includes('hello')) {
            const finalText = "Hello Sir";
            speech.text = finalText;
        } else if (message.includes("how are you"))  {
            const finalText = "I am fine sir. Tell me how can I help you?";
            speech.text = finalText;
        } else if (message.includes("name"))  {
            const finalText = "My name is JARVIS. You only named me sir, did you forget it?";
            speech.text = finalText;
        } else if (message.includes("open google"))  {
            window.open('https://google.com', "_blank");
            const finalText = "Opening Google";
            speech.text = finalText;
        } else if (message.includes("open instagram"))  {
            window.open('https://instagram.com', "_blank");
            const finalText = "Opening Instagram";
            speech.text = finalText;
        } else if (message.includes("open my school"))  {
            window.open('https://www.21kschool.in/#portal', "_blank");
            const finalText = "Opening your school";
            speech.text = finalText;
        } else if (message.includes("what is") || message.includes("who is") || message.includes("what are")) {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "This is what I found on the internet regarding " + message;
            speech.text = finalText;
        } else if (message.includes("play")) {
            const query = message.replace("play", "").trim();
            const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            window.open(searchUrl, "_blank");
            const finalText = `Searching YouTube for ${query}`;
            speech.text = finalText;  
        } else if (message.includes("wikipedia")) {
            window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "+")}`, "_blank");
            const finalText = "This is what I found on Wikipedia regarding " + message;
            speech.text = finalText;
        } else if (message.includes("time")) {
            const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
            const finalText = "The current time is " + time;
            speech.text = finalText;
        } else if (message.includes("date")) {
            const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
            const finalText = "Today's date is " + date;
            speech.text = finalText;
        } else if (message.includes("open calculator")) {
            window.open('Calculator:///');
            const finalText = "Opening calculator";
            speech.text = finalText;
        } else if (message.includes("search for")) {
            // Extract the search query
            const query = message.replace("search for", "").trim();
            // Perform a Google search
            window.open(`https://www.google.com/search?q=${query}`, "_blank");
            const finalText = "Searching Google for " + query;
            speech.text = finalText;
        } else if (message.includes("open whatsapp")) {
            window.open('whatsapp://');
            const finalText = "Opening WhatsApp";
            speech.text = finalText;
        } else if (message.includes("open capcut")) {
            // Replace 'YOUR_CAPCUT_PATH' with the actual path to CapCut on your system
            window.open("Capcut.exe");
            const finalText = "Opening CapCut";
            speech.text = finalText;
        } else if (message.includes("open powerpoint")) {
            // Replace 'YOUR_POWERPOINT_PATH' with the actual path to PowerPoint on your system
            window.open('YOUR_POWERPOINT_PATH');
            const finalText = "Opening PowerPoint";
            speech.text = finalText;
        } else if (message.includes("open camera")) {
        window.open('YOUR_CAMERA_PATH');
        const finalText = "Opening Camera";
        speech.text = finalText;
        } else if (message.includes("open zoom")) {
        window.open('YOUR_ZOOM_PATH');
        const finalText = "Opening Zoom";
        speech.text = finalText;
        } else if (message.includes("open teamviewer")) {
        window.open('YOUR_TEAMVIEWER_PATH');
        const finalText = "Opening TeamViewer";
        speech.text = finalText;
        } else if (message.includes("open microsoft edge")) {
        window.open('microsoft-edge://');
        const finalText = "Opening Microsoft Edge";
        speech.text = finalText;
        } else if (message.includes("open youtube")) {
        window.open('https://www.youtube.com/');
        const finalText = "Opening YouTube";
        speech.text = finalText;
        } else if (message.includes("open visual studio code")) {
        window.open('YOUR_VSCODE_PATH');
        const finalText = "Opening Visual Studio Code";
        speech.text = finalText;
        }
    
        speech.volume = 1;
        speech.pitch = 1;
        speech.rate = 1;
    
        window.speechSynthesis.speak(speech);

        // Display the chat in the chat box
        displayChat("User", message);
    }
    
    // Function to display chat in the chat box
    function displayChat(sender, message) {
        const chatItem = document.createElement('div');
        chatItem.classList.add('chat-item');
    
        const senderSpan = document.createElement('span');
        senderSpan.textContent = sender + ':';
        chatItem.appendChild(senderSpan);
    
        const messageSpan = document.createElement('span');
        messageSpan.textContent = message;
        chatItem.appendChild(messageSpan);
    
        chatBox.appendChild(chatItem);
    }
});
