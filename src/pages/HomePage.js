import React from 'react';
import Notification from '../components/Notification';
import './helping.css';

function HomePage(props){
    return(
        <div class="container">
            <div class='mt-4 row'>
                <div class='col-md-9'>
                    <article>
                    <p id="parafpriti" class='has-dropcap'> 
                    Студентски парламент Математичког факултета је орган преко ког студенти остварују своја права и 
                    штите своје интересе на факултету.Чланови Студентског парламента Математичког факултета су редовни студенти Математичког факултета 
                    који су изабрани гласовима студената на редовним или ванредним изборима за чланове парламента. 
                    </p>
                    <p id="parafpriti">
                    Студентски парламент се састоји од 25 члана. У тренутном сазиву има 21 члана. Мандат чланова 
                    Студентског паралмента траје две године.
                    </p>
                    <p id="parafpriti">
                    Председник, заменик председника, потпредседници Студентског парламента, студент продекан и члан 
                    Студентског парламетна Универзитета у Београду чине Председништво Студентског парламента.
                    </p>
                    <p id="parafpriti">
                    Борба за права и интересе студената, као примарна активност Студентског парламента, остварује се 
                    кроз органе факултета и у сарадњи са члановима управе факултета.
                    </p>
                    <p id="parafpriti">
                    Отворени смо за предлоге, примедбе и сугестије које имате, те будите слободни да нам се обратите.
                    </p>
                    <p id="parafpriti">
                    Можете нам се обратити у сваком тренутку на мејл адресу <a  href="mailto:parlament@alas.matf.bg.ac.rs"> parlament@alas.matf.bg.ac.rs</a> као и на 
                    друштвеним мрежама Студентског парламента. Такође, сваки члан парламента је дужан да помогне 
                    сваком студенту у складу са својим могућностима. 
                    </p>
                    </article>
                </div>
                <div class='col-md-3 pull-right'>
                    <Notification />
                </div>
            </div>
        </div>
    );
}

export default HomePage;