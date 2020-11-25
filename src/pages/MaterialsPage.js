import React from 'react';
import drive from '../images/drive.jpg';
import book from '../images/help.png';

function MaterialsPage(props){
    return(
    <div class='mt-4'>    
        <div class="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-xs-2">
                        <img width="150"
                        height="150" 
                        class="img-responsive" src={drive} alt=""/>
                    </div>
                    <div class="ml-4 col-xs-offset-2 col-xs-8">
                        <h1>Прикупљени материјали!</h1>
                        <p>На овом драјву можете наћи скоро сву литературу за предмете које полажете.</p>
                        <p><a class="btn btn-primary btn-lg" 
                        href="https://drive.google.com/drive/folders/1D7VNCMPQoF_45vDP4hsxeQLg5I9gdIEs" 
                        role="button">Драјв</a></p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-xs-2">
                            <img width="150"
                        height="150" class="img-responsive" src={book} alt=""/>
                    </div>
                    <div class="ml-4 col-xs-offset-2 col-xs-8">
                        <h1>Пружи помоћ!</h1>
                        <p>Јавите нам се како бисмо проширили материјал.</p>
                        <p><a  href="mailto:parlament@alas.matf.bg.ac.rs"> parlament@alas.matf.bg.ac.rs</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MaterialsPage;