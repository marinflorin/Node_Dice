import React from 'react';
//import OUBet from './OUBet';
//import AutoBet from './AutoBet';
import Chat from './Chat';
const HomePage = () => {
  return (
  <div className="row">
      <div className="col-sm-12">
         <h1 className="page-heading">Chat</h1> 
      </div>
     {/*   <div className="col-sm-10 col-md-10 col-lg-10">
       <div className="panel panel-primary">
            <div className="panel-heading">
                Header
            </div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-md-8">
                       <OUBet />  
                    </div>
                    <div className="col-md-4">
                         <AutoBet />
                    </div>
                </div>
            </div>
        </div>
      </div> */}
      <div className="col-md-6 col-lg-6">
       <Chat />
      </div>
</div>
   );
};
export default HomePage;
