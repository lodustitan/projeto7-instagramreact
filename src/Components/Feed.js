import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}

export default Feed;