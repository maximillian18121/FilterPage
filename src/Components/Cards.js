
import React from 'react'
import { useSelector } from 'react-redux'
import { Button} from '@mui/material';
import { setId, toggleRead } from '../Features/CardSlice';
import { useDispatch } from 'react-redux';

const Cards = () => {
    const {cardItems, read, id} = useSelector((store)=>store.cardState);
    const dispatch = useDispatch();
  return (
    <>
    <div className="card-container">
            {cardItems.map((data) => {
              const {
                jdUid,
                jobDetailsFromCompany,
                companyName,
                jobRole,
                location,
                logoUrl,
                minJdSalary,
                maxJdSalary,
                minExp,
                maxExp,
              } = data;
              return (
                <div className="card" key={jdUid}>
                  <div className="card-content">
                    <p className="card-header">Posted 10 days ago</p>
                    <div className="logo-description">
                      <img className="card-image" src={logoUrl} alt="logo" />
                      <div className="card-logo-description">
                        <p className="logo-text company">{companyName}</p>
                        <p className="logo-text title">{jobRole}</p>
                        <p className="logo-text location">{location}</p>
                      </div>
                    </div>
                    <div className="card-description">
                      <p className=" description-text salary">
                        {`Estimated-Salary :`}
                        {minJdSalary ? `$${minJdSalary}000` : `$0`}
                        {maxJdSalary ? ` - $${maxJdSalary}000` : ``}
                      </p>
                      <p className=" description-text-demo">About Company</p>
                      <p className=" description-text-demo demo-diff">
                        About Us
                      </p>
                      <p className=" about">
                        {read && id === jdUid
                          ? jobDetailsFromCompany
                          : jobDetailsFromCompany.slice(0, 100)}
                        <p
                          className="read-more"
                          onClick={() => {
                            dispatch(toggleRead());
                            dispatch(setId(jdUid));
                          }}
                        >
                          {read && id === jdUid?"close job":"view job" }
                        </p>
                      </p>
                      <p className=" description-text-demo demo-diff">
                        Minimum Experience
                      </p>
                      <p className=" about">
                        {minExp ? `${minExp} years` : `Fresher`}
                        {maxExp ? `- ${maxExp} years` : ``}
                      </p>
                      <div className="button-group">
                      <Button
                          className="button"
                          variant="contained"
                          color="success"
                        >
                          Easy Apply
                        </Button>
                        <Button
                          className="button"
                          variant="contained"
                          color="primary"
                        >
                          Unlock referral Asks
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
    </>
  )
}

export default Cards