import React, {useState, Component} from 'react';
import {useHistory} from 'react-router-dom';
import {compose, withProps, withStateHandlers} from "recompose";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import {VelocityComponent} from 'velocity-react';
import validator from 'validator';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';

import '../../css/contact.css';
import prefix from "./Config";
import Header from './Header';

let defaultProps = {
    /*GOOGLE MAPS PROPS*/
    center: {lat: 26.860412, lng: 81.025045},
    zoom: 16,
    mapStyles: [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#012621"
                },
                {
                    "weight": 0.8
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                {
                    "color": "#012621"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#0c0000"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#012621"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#012621"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#012621"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#06c5a9"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "lightness": -7
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#06c5a9"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 0.3
                },
                {
                    "lightness": 10
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#047968"
                },
                {
                    "lightness": "-7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometr	y",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "visibility": "on"
                },
                {
                    "lightness": -15
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "lightness": "7"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "lightness": -34
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#333739"
                }
            ]
        }
    ],
    mapInfoBoxStyle: {
        color: '#08fdd8',
        backgroundColor: 'black',
        margin: '14px',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: '"MyLogo", sans-serif',
        opacity: .5,
        padding: `12px`,
        width: '250px',
        transform: 'none',
        borderRadius: '4px'
    },

    /*flyLetter ANIMATION PROPS*/
    flyLetterStyles: {
        input: {
            height: 40,
            backgroundColor: '#ddd',
            width: 200,
            border: 'none',
            outline: 'none',
            marginBottom: 20,
            fontSize: 22,
            padding: 8,
        },
        letters: {
            position: 'absolute',
            top: -200,
            left: '7%',
            opacity: 1,
            display: 'block',
            height: 140,
            width: '32%',
            color: 'white',
        },
        letter: {
            opacity: 0,
            marginTop: '90%',
            fontSize: 16,
            fontFamily: 'monospace',
            float: 'left',
            height: 0
        }
    },
};

/*GOOGLE MAPS FUNC*/
const StyledMapWithAnInfoBox = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBa7trDSsEedbuHDCqBFTLtJIAtSHYrg9s&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`, width: '100%'}}/>,
        containerElement: <div style={{width: '100%'}}/>,
        mapElement: <div style={{height: `100%`, width: '100%'}}/>
    }),
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({isOpen}) => () => ({
            isOpen: !isOpen,
        })
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={defaultProps.zoom}
        defaultCenter={defaultProps.center}
        defaultOptions={{styles: defaultProps.mapStyles}}
    >
        <Marker
            position={defaultProps.center}
            onClick={props.onToggleOpen}
        >
            {props.isOpen &&
            <InfoBox
                onCloseClick={props.onToggleOpen}
                options={{closeBoxURL: ``, enableEventPropagation: true}}
            >
            </InfoBox>}
        </Marker>
    </GoogleMap>
);
/*END GOOGLE MAPS FUNC*/

/*flyLetter ANIMATION*/
const VelocityLetter = ({letter}) => (
    <VelocityComponent
        runOnMount
        animation={{opacity: 1, marginTop: 0}}
        duration={1000}
    >
        <p style={defaultProps.flyLetterStyles.letter}>{letter}</p>
    </VelocityComponent>
);
/*END flyLetter ANIMATION*/


function Contact()
{

    const history = useHistory();
const [user,setUser] = useState({
        name:"",email:"",subject:"",msg:""
    });

    let name,value;
    const HandleInputs = (e) =>{
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({... user,[name]:value});
    };

    const postData = async (e) => {
        e.preventDefault();
        
        const {name,email,subject,msg} = user;
        if(name=="" || email=="" || msg=="")
        {
            window.alert("please input all the fields");
        }
        else
        {
            setUser
            ({
                name:"",email:"",subject:"",msg:""
            });
    
            const res = await fetch("/message" , {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              } ,
              
              body: JSON.stringify({name,email,subject,msg})
            });
    
            const data = await res.json();
            console.log();
                window.alert("Thanks for your response "+name);
                history.push("/contact");
            // console.log(data);
        }
        

    };

    const [isLoad,setLoad] = useState(true);

    setTimeout(() => setLoad(false), 1500);

    if (isLoad) {
        return <PreloaderElement/>
    }

    return <> <Header />
    <div className="contact_content">
        <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="contact_main">
            <div className="left_side">
                <span className="tag_h1">&lt;h1&gt;</span> <br/>
                <TextSplit className="text_h1">Contact</TextSplit>
                <span className="tag_h1">&lt;h1/&gt;</span> <br/>
              
                <form method="POST" id="contact" autoComplete="off">
                    <div className="input_row">
                        <div className="half">
                            <input placeholder="Name" type="text" name="name"  value={user.name} onChange={HandleInputs} required/>
                        </div>
                        <div className="half">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                 value={user.email} onChange={HandleInputs}
                                required
                            />
                        </div>
                    </div>
                    <div className="input_row">
                        <input placeholder="Subject" type="text"
                               value={user.subject} onChange={HandleInputs} name="subject"/>
                    </div>
                    <div className="input_row">
                    <textarea placeholder="Message" name="msg" required value={user.msg} onChange={HandleInputs}
                              type="text"
                              minLength="10"
                              required
                              >
                              </textarea>
                    </div>
                    <div className="input_submit">
                        <input id="submit" type="submit" value="SEND"
                        onClick={postData}
                        />
                    </div>
                </form>
            </div>
            <div className="right_side">
                <StyledMapWithAnInfoBox/>
            </div>
        </div>
        <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
    </div> </>;
}
export default Contact;
