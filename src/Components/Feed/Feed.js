import Posts from "./Posts/Posts";
import Stories from "./Stories/Stories";

function Feed() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}

export default Feed;