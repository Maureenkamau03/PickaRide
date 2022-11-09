import React from 'react';
 
function contacts(){
    return(
        <>
        <div className="contact-info">
            <div className="container-fluid">
                <div className="row">
                    <div className ="col-lg-10 offset-lg-1 d-flex justify-content-between">
                        {/*phone number*/}
                        <div className="contact_info_item d-flex justify-content-start align center">
                            <image src="http://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                            <div className='contact_info_content'>
                                <div className='contact_info_tittle'>
                                    phone
                                </div>
                                <div className='contact_info_text'>
                                    +254468045469
                                </div>
                            </div>

                        </div>
                        {/*email info*/}
                        <div className="contact_info_item d-flex justify-content-start align center">
                            <image src="http://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                            <div className='contact_info_content'>
                                <div className='contact_info_tittle'>
                                    Email
                                </div>
                                <div className='contact_info_text'>
                                    pickaride@gmail.com
                                </div>
                            </div>

                        </div>
                         {/*address*/}
                        <div className="contact_info_item d-flex justify-content-start align center">
                            <image src="http://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                            <div className='contact_info_content'>
                                <div className='contact_info_tittle'>
                                    Address
                                </div>
                                <div className='contact_info_text'>
                                    Nairobi,kenya
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        {/*contact us form*/}
        <div className='contact_form'>
           <div className='container'>
             <div className='row'>
                <div className='col-lg-10 offset-lg'>
                    <div className='contact_form_container py-5'>
                        <div className='contact_form_tittle'>
                            Get in Touch
                        </div>
                        <form id="contact_form">
                            <div className='contact_form_name d-flex justify-content-between align-items-between'>
                                <input type="text" id="contact_form_name"
                                   className='contact_form_name input_feild'
                                   placeholder="Your name" required="true"/>

                                 <input type="email" id="contact_form_email"
                                   className='contact_form_email input_feild'
                                    placeholder="Your Email" required="true"/>

                                 <input type="number" id="contact_form_phone"
                                   className='contact_form_phone input_feild'
                                placeholder="Your Phone Number" required="true"/>
                            </div>

                            <div className='contact_form_text mt-5'>
                                <textarea className='text_feild_contact_form_message' 
                                placeholder='Message' cols='30' rows='10'></textarea>
                            </div>

                            <div className='contact_form_button'>
                                <button type='submit' className='button contact_submit_button'>Send Message</button>
                            </div>

                        </form>
                    </div>
                </div>
             </div>
            </div> 
        </div>
        </>

    )
}
export default contacts