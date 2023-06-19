var questionButton = $("#submit")
var questionInput = $("#question")

var responses = [
  "Absolutely 💟❣️ you got this, queen! 👑",
  "I spend a lot of time listening to the weather. It said yes.",
  "I have three letters for you: Y-E-S ‼️",
  "🆗👍🏿💯",
  "Is the sky blue? 🌀🧿",
  "I’m watching you 🧿🧿🧿 and I think you’re great.",
  "A <b>yes</b> for every hair 💁‍♀️ on your head. And if you’re 👨🏿‍🦲 also <b>yes</b>.",
  "As an AI chatball 💬 I can’t tell you what to do. So YES."
]

function randResponse() {
  var randindex = Math.floor(Math.random() * responses.length)
  return responses[randindex]
}

questionButton.click(function() {
  console.log("hello")
  if ($("#submit").text() == "Reset") {
    $("#ball").effect("shake")
    $("#ball").toggle("fade")
    setTimeout(
      function() {
        $("#question").toggle("fade")
      }, 800
    )
    $("#submit").text("Submit")
    $("#target").html("")
  }
  else {
    $("#question").effect("shake")
    $("#question").toggle("fade")
    setTimeout(
      function() {
        $("#ball").toggle("fade")
        $("#ball").effect("shake")
      }, 800
    )
    // ANSWER FADE IN
    setTimeout(
      function() {
        if (questionInput.val() == "") {
          $("#target").toggle("fade")
          setTimeout(function() {
            $("#target").html("Even when you don't ask me a question, I know you're right. YES. YES. YES.")
          }, 400)
          $("#target").toggle("fade")
        } else {
          $("#target").toggle("fade")
          setTimeout(function() {
            $("#target").html(randResponse())
          }, 400)
          $("#target").toggle("fade")
        }
      }
      , 1000)
    // reset button
    $("#submit").text("Reset")
  }
})

