import React from 'react';

import { View, Text, Button, StyleSheet, Image, Dimensions,TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) =>{

    const Skip = () =>(
        <TouchableOpacity 
        title="Skip"
        color='#000'
        onPress={() => navigation.navigate("Login") }
       
        >
        <Text style={{ fontSize: 16, color:'black'}}> Skip </Text>
    </TouchableOpacity>
    )


    const Next = ({ ...props }) =>(
        <TouchableOpacity 
        
        onPress={() => navigation.navigate("Login") }
        { ...props }
        >
            <Text style={{ fontSize: 16, color:'black'}} > Next </Text>
        </TouchableOpacity>
    )

    return(
        <Onboarding

        SkipButtonComponent={Skip}
        NextButtonComponent ={ Next }
        onSkip= { () => navigation.navigate("Login") }
        onDone= { () => navigation.navigate("Login") }

  pages={[
    {
      //backgroundColor: '#2475B0',
      image: <Image source={require('../assests/tutorial101.png')}
      style={{ resizeMode:'contain', width: 400,
    height: 400
    }}
      />,
      title: <Text style={{ fontSize:18, fontWeight:'bold' }}>Courses</Text>,
      subtitle: <Text style={{ textAlign:'justify', padding:50, fontSize:14, fontWeight:'bold' }}>Learn Financial Markets by choosing from 120+ premium courses and get certified on completion.</Text>,
    },
    {
        //backgroundColor: '#10A881',
        image: <Image source={require('../assests/tutorial201.png')}
        style={{ resizeMode:'contain', width: 400,
        height: 400}}
        />,
        title: <Text style={{ fontSize:18, fontWeight:'bold' }}>Events</Text>,
      subtitle: <Text style={{ textAlign:'justify', padding:50, fontSize:14, fontWeight:'bold' }}>Interact and learn from market stalwarts through webiners, workshops and seminars!</Text>,
    },
      {
        //backgroundColor: '#E83350',
        image: <Image source={require('../assests/tutorial301.png')}
        style={{ resizeMode:'contain', width: 400,
    height: 400
    }}
        />,
        title: <Text style={{ fontSize:18, fontWeight:'bold' }}>Free Learning</Text>,
      subtitle: <Text style={{ textAlign:'justify', padding:50, fontSize:14, fontWeight:'bold' }}>Kick start your financial learning with our free courses, e-books, videos and fun games.</Text>,
    },
    
  ]}
/>
    );
};


export default OnboardingScreen;