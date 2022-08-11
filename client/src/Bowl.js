import './Bowl.scss';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

function Bowl() {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(
    function () {
      if (id) {
        fetch(`/api/bowls/${id}`)
          .then((response) => response.json())
          .then((data) => setData(data));
      }
    },
    [id]
  );

  return (
    <main className="container">
      <h1> {data?.Title} </h1>
      {/* <p>{JSON.stringify(data)}</p> */}
      <h2 className="subtitle">{data?.Subtitle} </h2>
      <div class="card">
        <div class="card-body">
          <img className="mango" src="https://choosingchia.com/jessh-jessh/uploads/2022/03/Mango-Smoothie-Bowl-6.jpg"></img>
          <h5>
            Mango Sunshine Bowl <br></br>
            <br></br>Ingredients <br></br> - 1/2 Frozen banana<br></br> - 1 Cup frozen mango
            <br></br> - 2 Pieces of spinach<br></br> - 1/2 Cup almond milk<br></br>- 1/2 Lime squeezed<br></br>- Splash of vanilla extract
            <br></br>
            <br></br>Instructions<br></br>Blend all ingredients. <br></br> Place into the bowl you desire.<br></br> Top it with hemp seeds.
          </h5>
        </div>
      </div>
      <br></br>
      <div class="card">
        <div class="card-body">
          <img className="mango" src="https://www.cookingclassy.com/wp-content/uploads/2019/05/acai-bowl-23.jpg"></img>
          <h5>
            {' '}
            The Classic Bowl <br></br>
            <br></br>Ingredients <br></br> - Frozen acai packet<br></br> - 1 Banana
            <br></br> - 3 Strawberries<br></br> - Granola<br></br>- Agave syrup or honey<br></br>- 1/2 Cup almond milk
            <br></br>
            <br></br>Instructions<br></br>Blend acai packet with almond milk. <br></br> Place into the bowl you desire, and top it <br></br>{' '}
            with the fruit, granola, and agave syrup or honey.
          </h5>
        </div>
      </div>
      <br></br>
      <div class="card">
        <div class="card-body">
          <img
            className="mango"
            src="https://3.bp.blogspot.com/-h2B3fyCGDbY/WXk69yAewBI/AAAAAAAAFbw/MkDXXdL3BLMY2w3UvndOm0YRCx5i711mgCLcBGAs/s1600/strawberry_lemon_basil_water3.jpg"></img>
          <h5>
            Strawberry Cleanse <br></br>
            <br></br>Ingredients <br></br> - 1 Cup of strawberries<br></br> - Local honey
            <br></br> - Lime or lemon<br></br> - Fresh mint
            <br></br>
            <br></br>Instructions<br></br>Cut strawberries into slices. <br></br> Place into a mason jar. <br></br> Add the lemon, honey,
            and fresh mint.<br></br>Add ice and fill with water.<br></br>Enjoy!
          </h5>
        </div>
      </div>
      <br></br>
      <div class="card">
        <div class="card-body">
          <img className="mango" src="https://thehintofrosemary.com/wp-content/uploads/2022/04/Coconut-cloud-smoothie-recipe-2.jpg"></img>
          <h6>
            {' '}
            Planet Earth Smoothie <br></br>
            <br></br>Ingredients <br></br> - Blue spirulina<br></br> - Matcha
            <br></br> - Frozen bananas<br></br> - 1/2 Cup almond milk<br></br>- Whipped coconut cream<br></br>- Splash vanilla extract
            <br></br>
            <br></br>Instructions<br></br>Blend matcha with all ingredients except <br></br>for blue spirulina. Pour into a cup. Do the
            <br></br> same steps but this time with blue spirulina.<br></br>Grab a clear glass and alternate pouring the green<br></br> and
            blue batch.Top with more whipped coconut cream.
          </h6>
        </div>
      </div>
      <br></br>
      <div class="card">
        <div class="card-body">
          <img className="mango" src="https://saltandbaker.com/wp-content/uploads/2021/04/Chocolate-Chip-Waffles-7.jpg"></img>
          <h6>
            {' '}
            Chocolate Belgium Waffles <br></br>
            <br></br>Ingredients <br></br> - 2 medium sized bananas<br></br> - 1 Cup rolled oats
            <br></br> - 1 Cup almond milk<br></br> - Teaspoon baking powder<br></br>- Teaspoon ground cinnamon<br></br>- Splash vanilla
            extract
            <br></br>
            <br></br>Instructions<br></br>Blend ingredients into a blender <br></br>Lather waffle maker with avacado oil spray.
            <br></br> Pour batch with as much chocolate chips as<br></br> you want and let cook.Serve with maple <br></br>syrup and
            strawberries on top .
          </h6>
        </div>
      </div>
      <br></br>
      <div class="card">
        <div class="card-body">
          <img
            className="mango"
            src="https://images.squarespace-cdn.com/content/v1/539cc58be4b03916d1da4907/1584244443561-7DJUPP7TNLDB1S473Q7J/Grain-Free+Banana+Nut+Waffles?format=1000w"></img>
          <h6>
            {' '}
            Nutty Belgium Waffles <br></br>
            <br></br>Ingredients <br></br> - 2 medium sized bananas<br></br> - 1 Cup rolled oats
            <br></br> - 1 Cup almond milk<br></br> - Teaspoon baking powder<br></br>- Teaspoon ground cinnamon<br></br>- Splash vanilla
            extract
            <br></br>
            <br></br>Instructions<br></br>Blend ingredients into a blender <br></br>Lather waffle maker with avacado <br></br>oil spray.
            Pour batch into the waffle<br></br> maker and let cook. Serve with maple <br></br>syrup almonds, walnuts, and bananas on top .
          </h6>
        </div>
      </div>
      <br></br>
    </main>
  );
}
export default Bowl;
