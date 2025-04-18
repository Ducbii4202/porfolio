import { PROJECTS } from './index';
import Stack from './Stack';

const projectCards = PROJECTS.map((project, index) => ({
    id: index + 1,
    img: project.image
}));

<Stack
    randomRotation={true}
    sensitivity={180}
    sendToBackOnClick={false}
    cardDimensions={{ width: 200, height: 200 }}
    cardsData={projectCards}
/>;
