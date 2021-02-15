function App() {
    return (
      <div>
        <Tweet
          name="God"
          username="OGcapitalG"
          date={new Date().toDateString()}
          message="My man, Adam! Here's your wife. What do you want to call her?"
        />
        <Tweet
          name="Adam"
          username="WhosUrDaddy"
          date={new Date().toDateString()}
          message="Whoah Man!!!"
        />
        <Tweet
          name="Eve"
          username="WhoWantsAnApple?"
          date={new Date().toDateString()}
          message="👀 👀 👀"
        />
        <Tweet
          name="God"
          username="OGcapitalG"
          date={new Date().toDateString()}
          message="Say less, fam."
        />
      </div>
    );
  }