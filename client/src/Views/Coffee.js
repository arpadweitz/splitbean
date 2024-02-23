import React from 'react'
import styled from 'styled-components'
import { URL } from '../config'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  position: relative;
  margin-top:15vh;
  padding: 17em;
  background: url('${URL}/assets/espresso2.jpeg') center/cover no-repeat; /* Add your background image here */
  text-align: justify;
  color: black; /* Text color for the text inside the wrapper */
  width: 100%
  height: 50vh
`;

const Wrapper2 = styled.div`
  position: relative;
  padding: 19em;
  background: url('${URL}/assets/filter3.jpeg') center/cover no-repeat; /* Add your background image here */
  text-align: justify;
  color: white; /* Text color for the text inside the wrapper */
  width: 100%
  height: 50vh
`;

const Wrapper3 = styled.div`
  position: relative;
  padding: 19em;
  background: url('${URL}/assets/milk.jpeg') center/cover no-repeat; /* Add your background image here */
  text-align: justify;
  color: white; /* Text color for the text inside the wrapper */
  width: 100%
  height: 50vh
`;

const Wrapper4 = styled.div`
  position: relative;
  padding: 19em;
  background: url('${URL}/assets/mokapot.jpeg') center/cover no-repeat; /* Add your background image here */
  text-align: justify;
  color: white; /* Text color for the text inside the wrapper */
  width: 100%
  height: 50vh
`;


const Wrapper5 = styled.div`
  position: relative;
  padding: 19em;
  background: url('${URL}/assets/rawbean.jpeg') center/cover no-repeat; /* Add your background image here */
  text-align: justify;
  color: white; /* Text color for the text inside the wrapper */
  width: 100%
  height: 50vh
`;

const Wrapper6 = styled.div`
  position: relative;
  padding-bottom: 30em;
  padding-top: 7em;
  padding-right: 11em;
  padding-left: 19em;
  background: url('${URL}/assets/coffeesub.jpeg') center/cover no-repeat; /* Add your background image here */
  text-align: justify;
  color: black; /* Text color for the text inside the wrapper */
  width: 100%
  height: 50vh
`;

function Coffee() {
  return (
    <>
    <Wrapper>
<p className='espresso'>
        <h3>Espresso </h3> a beloved Italian creation, is a concentrated coffee beverage known for 
        its robust flavor and rich aroma. Brewed by forcing hot water through finely-ground coffee beans,
         it boasts a velvety crema and intense taste. Served in small shots, espresso is the foundation of numerous coffee drinks,
          prized for its bold character. </p>
     </Wrapper>

<Wrapper2>
<p className='filter'> <h3>Filter</h3> coffee is a classic brew method cherished for its simplicity and rich flavor profile.
 Ground coffee is steeped in hot water and filtered to produce a smooth, clean cup. With its diverse range of flavors and aroma, 
 filter coffee remains a beloved choice among coffee enthusiasts worldwide, offering a delightful brewing experience.

</p>
</Wrapper2>

<Wrapper3>
<p className='milk'> <h3>Coffee and Milk</h3> combine the rich, bold flavors of coffee with the creamy texture of milk, 
creating a delightful beverage enjoyed worldwide. With the growing trend towards plant-based diets, alternative milks like oat, 
soy, and almond have gained popularity, offering diverse options for those seeking dairy-free alternatives.


</p>
</Wrapper3>

<Wrapper4>
<p className='mokapot'> <h3>The moka pot</h3> an iconic stovetop coffee maker, has captivated coffee enthusiasts for generations with 
its simplicity and ability to produce rich, flavorful brews. Its enduring popularity stems from its efficiency in extracting the bold essence
 of coffee, making it a cherished staple in many homes and cafes worldwide.
</p>
</Wrapper4>

<Wrapper5>
<p className='bean'> <h3>Coffee sustainability </h3> is imperative for the industry's long-term viability. 
From fair trade practices ensuring equitable compensation for farmers to environmentally friendly cultivation methods preserving ecosystems, 
sustainability encompasses economic, social, and environmental dimensions. Through initiatives promoting shade-grown, organic,
 and carbon-neutral coffee, stakeholders strive to uphold ethical standards while safeguarding the future of coffee production and
  communities worldwide.
</p>
</Wrapper5>

<Wrapper6>
<p className='coffeesubscribe'> <h3>Stay updated on the world of coffee!</h3> <Link className='subsc'link to="/subscription">Subscribe</Link>  to our newsletter for insights into flavor profiles, 
brewing techniques, and exciting industry news. Don't miss out on discovering new ways to enjoy your favorite beverage and stay informed 
about the latest trends in the coffee community. Sign up now for a caffeinated journey!

</p>
</Wrapper6>



</>
  )
}

export default Coffee