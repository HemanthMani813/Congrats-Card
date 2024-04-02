const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1>Congratulations</h1>
    <div className="profile-container">
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' />
      <h1>Hemanth </h1>
      <p>
        You can also publish your code using the publish command and open the
        URL link
      </p>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
