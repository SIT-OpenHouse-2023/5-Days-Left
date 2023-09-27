import ActivityItem from "../components/ActivityItem";
import Container from "../components/Container";

export default function ActivityView() {
    return (
        <Container>
            Activity Checklist
            <hr />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eaque
            dolores eos consequuntur corrupti eligendi necessitatibus minus,
            provident unde enim, est modi autem odio obcaecati cumque blanditiis
            qui soluta asperiores!
            <div className="flex flex-col gap-5">
                <ActivityItem />
                <ActivityItem />
                <ActivityItem />
            </div>
        </Container>
    );
}
