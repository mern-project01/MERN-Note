import React from 'react';

const Props = (param) => {
    console.log(param)
    return (
      <div>
        <h1   className="text-8xl text-yellow-400 text-center ">
          we are ready to go {param.name} {param.design}
        </h1>
        <h1></h1>
            <p style={{ color: "green", textAlign: "center", padding:"100px"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi
          optio doloribus repellendus distinctio harum repudiandae magnam
          deleniti tenetur, architecto alias a facilis fuga aut nihil.
          Repudiandae tempore sunt hic.
        </p>
      </div>
    );
};

export default Props;