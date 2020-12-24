import React from 'react';
import { Suspense, lazy } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const MemberCards = React.lazy(() => import('../components/MemberCards'));

function MembersPage(props){
    return(
        <div class="mt-4 ">
            <Suspense fallback={ <Spinner animation="border" variant="danger" />}>
                <MemberCards />
            </Suspense>
        </div>
    );
}

export default MembersPage;