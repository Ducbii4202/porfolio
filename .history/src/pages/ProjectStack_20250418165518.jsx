import { PROJECTS } from './index';
import Stack from './Stack';

const projectCards = PROJECTS.map((project, index) => ({
    id: index + 1,
    img: project.image
}));

<Stack
    cardsData={projectCards}
    randomRotation={true}
    sendToBackOnClick={true}
/>;
