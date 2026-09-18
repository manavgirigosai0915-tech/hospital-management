import React from "react";
import "./Doctors.css";

const Doctors = () => {

  const doctors = [
    {
      id: 1,
      image: "/images/doctor.png",
      name: "Dr. John Smith",
      specialist: "Cardiologist",
    },
    {
      id: 2,
      image: "/images/doctor.png",
      name: "Dr. Sarah Johnson",
      specialist: "Neurologist",
    },
    {
      id: 3,
      image: "/images/doctor.png",
      name: "Dr. David Wilson",
      specialist: "Orthopedic",
    },
    {
      id: 4,
      image: "/images/doctor.png",
      name: "Dr. Emily Brown",
      specialist: "Dentist",
    },
    {
      id: 5,
      image: "/images/doctor.png",
      name: "Dr. Michael Lee",
      specialist: "Eye Specialist",
    },
    {
      id: 6,
      image: "/images/doctor.png",
      name: "Dr. Sophia Clark",
      specialist: "Pediatrician",
    },
  ];


  return (

    <section className="doctors">

      <div className="container">


        <div className="section-title">

          <h4>OUR DOCTORS</h4>

          <h2>
            Meet Our Specialists
          </h2>

          <p>
            Our experienced medical team provides world-class healthcare
            with dedication and compassion.
          </p>

        </div>



        <div className="doctor-grid">


          {
            doctors.map((doctor)=>(

              <div 
                className="doctor-card" 
                key={doctor.id}
              >


                <img

                  src={doctor.image}

                  alt={doctor.name}

                  className="doctor-image"

                  onError={(e)=>{
                    e.target.src="/images/doctor.png";
                  }}

                />



                <div className="doctor-info">


                  <h3>
                    {doctor.name}
                  </h3>


                  <p>
                    {doctor.specialist}
                  </p>


                  <button>
                    View Profile
                  </button>


                </div>


              </div>


            ))
          }


        </div>


      </div>


    </section>

  );

};


export default Doctors;