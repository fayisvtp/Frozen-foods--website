import React from 'react';
import pic1 from '/coding/Projects/frostybytes/src/assets/Portion Control.jpg'
import pic2 from '/coding/Projects/frostybytes/src/assets/Staff Training and Communication.jpg'

const FoodCost = () => {
  return (
  <>
    <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>How to Contorol Your Health</h1>
          <h3 className="main-heading text-primary">Introduction:</h3>
          <div className="underline mx-auto"></div>
          <p>
          Managing food costs is a crucial aspect of running a successful 
          and profitable food-related business. Whether you own a restaurant, 
          catering service, or any other food establishment, effective cost 
          management is key to sustainability and growth. In this summary, we'll 
          explore six essential strategies to help you optimize and control your food costs.
          </p>
         
        </div>
      </div>
    </div>
  </section>

  {/* ********************* */}
  <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 text-center">
              <h6>Menu Engineering:</h6>
              <p>
              Crafting a well-designed menu is a strategic approach to control food costs. 
              Analyze the popularity and profitability of each item, and focus on promoting
               high-margin dishes. Regularly review and update your menu based on cost
               fluctuations and customer preferences.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h6>Inventory Control:</h6>
              <p>
              Maintaining a tight grip on your inventory is essential for cost management. 
              Implement effective inventory tracking systems to monitor stock levels, track 
              expiration dates, and identify slow-moving items. Regularly conduct audits 
              to minimize waste and prevent overstock
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h6> Supplier Negotiations:</h6>
              <p>
              Building strong relationships with suppliers and negotiating favorable terms can 
              significantly impact your food costs. Regularly review contracts, compare prices 
              from different vendors, and consider bulk purchasing for discounts. Stay informed 
              about market trends to make informed decisions on supplier agreements.
              </p>
            </div>
          </div>
        </div>
      </section>
  {/* ********************* */}

  {/* services
   ************* */}
  <section className="section bg-success border-top">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-4 text-center ">
         
          <div className="underline mx-auto"></div>
        </div>
        <div className="col-md-4 ">
          <div className="card shadow">
            <img
              className="w-100 border-bottom"
              src={pic1}
              alt="services"
              style={{borderRadius:'0'}}
            />
            <div className="card-body">
              <h5>Portion Control:</h5>
              <div className="underline text-center "></div>
              <p>
              Implementing portion control measures ensures that you serve 
              consistent quantities to customers, reducing both food waste and costs. 
              Train staff on portioning standards, use standardized recipes, 
              and monitor serving sizes to maintain a balance between customer 
              satisfaction and cost-effectiveness.
              </p>
             
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card shadow">
            <img
              className="w-100 border-bottom"
              src={pic2}
              alt="services"
              style={{borderRadius:'0'}}
            />
            <div className="card-body">
              <h5> Staff Training and Communication:</h5>
              <div className="underline "></div>
              <p>
              Educate your staff about the importance of cost management and 
              involve them in the process. Effective communication ensures that
              everyone understands the significance of minimizing waste, controlling
              portions, and following inventory procedures. Regular training sessions
               can empower your team to contribute to cost-saving efforts.
              </p>
             
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card shadow">
            <img
              className="w-100 border-bottom"
              src="https://www.wallix.com/wp-content/uploads/2020/06/BMS-Bastion-Managed-Services-scaled.jpg"
              alt="services"
            />
            <div className="card-body">
              <h5>Technology Integration:</h5>
              <div className="underline "></div>
              <p>
              Leverage technology to streamline processes and enhance efficiency.
               Point-of-sale (POS) systems, inventory management software, and 
               analytics tools can provide valuable insights into sales patterns, 
               inventory turnover, and other key metrics. Embrace technology to make 
               informed decisions and identify areas for improvement.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default FoodCost;
