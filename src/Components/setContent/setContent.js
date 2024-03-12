import Spinner from '../spinner/Spinner';
import Page404 from '../page404/Page404';


const setContent = (process, Component, data) => {
    switch (process) {
        case 'loading':
            return <Spinner/>;
        case 'confirmed':
            return <Component data={data}/>;
        case 'error':
            return <Page404/>;
        default:
            throw new Error('Unexpected process state');
    }
}

export default setContent;