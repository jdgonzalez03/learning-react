import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <div className="App">
      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="midudev" 
        name="Miguel Angel Durán"
        initialIsFollowing={true}
        />

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="pheralb" 
        name="Pablo Hernandez" />

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="elonmusk" 
        name="Elon Musk" />
        

        <TwitterFollowCard 
        formatUserName={formatUserName} 
        name="Pepito Perez" />
    </div>
  );
}
