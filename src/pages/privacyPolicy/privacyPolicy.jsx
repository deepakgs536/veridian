import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, IconButton, Stack } from '@mui/material';
import VeridianLogo from '../../assets/veridianLogo.jpeg';
import CloseIcon from '@mui/icons-material/Close';
import Styles from './styles';
import { useNavigate } from 'react-router-dom';

function PrivacyPolicy() {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #d8eee8, #026948)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
            color: '#000000',
            height:{xs:'95%',md:'90%'},
          width: {xs:'90%',md:'60%',lg:'60%'},
          maxWidth: {xs:'none',md:'700px',lg:'1440px'},
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius:'25px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            borderBottom: '1px solid #cacfdb',
            paddingX: {xs:'10px',md:'20px'},
            backgroundColor:'#FFFFFF',
            borderTopLeftRadius:'20px',
            borderTopRightRadius:'20px',
          }}
        >
          <img
            src={VeridianLogo}
            alt="Veridian Logo"
            style={{
              maxWidth: '100px',
              height: 'auto',
              borderTopLeftRadius: '20px',
            }}
          />
          <IconButton
            onClick={() => navigate('/')}
            sx={Styles.closeIcon}
            >
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack
        sx={{
            backgroundColor: '#f2f4f7',
            padding: {xs:'10px',md:'20px'},
            height: '100%', // Set a maximum height for scrollable content
            overflow:'hidden',
            borderBottomLeftRadius:'20px',
            borderBottomRightRadius:'20px',
        }}
        >
            <Typography sx={Styles.privacyPolicyText}>
                Privacy Policy
            </Typography>
            <Box
            sx={{
                textAlign: 'left',
                padding: '3%',
                backgroundColor: '#FFFFFF',
                overflowY: 'scroll', // Make sure scrolling is applied only here
                height: '100%', // Set a maximum height for scrollable content
                '&::-webkit-scrollbar': {
                  width: '15px',
                  
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#a8a8a8',
                  borderRadius: '0px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: '#f1f1f1',
                },
                '@media (max-width:600px)': {
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                overflowY: 'auto', // To still allow scrolling without showing scrollbar
                },
              }}
            >
            <Typography sx={Styles.introduction} >
            Introduction
            </Typography>
            <Typography sx={Styles.header} >
            Privacy Policy
            </Typography>
            <Typography sx={Styles.bodyText} >
            This privacy policy sets out how VERIDIAN (GIBRALTAR) LIMITED uses and protects your personal data. This privacy policy is provided in a layered format so you can click through to the specific areas set out below. Important information and who we are
            </Typography>
            <Typography sx={Styles.header} >
            Privacy Policy
            </Typography>
            <Typography sx={Styles.bodyText} >
            This privacy policy gives you information about how VERIDIAN (GIBRALTAR) LIMITED collects and uses your personal data through your use of this website, specifically when you reach out to us through the “contact us” link to ask us questions or request further information.
            </Typography>
            <Typography sx={Styles.bodyText} >
            This website is not intended for children and we do not knowingly collect data relating to children.
            </Typography>
            <Typography sx={Styles.header} >
            Controller
            </Typography>
            <Typography sx={Styles.bodyText} >
            VERIDIAN (GIBRALTAR) LIMITED is the controller and responsible for your personal data (collectively referred to as ["COMPANY"], "we", "us" or "our" in this privacy policy).
            </Typography>
            <Typography sx={Styles.bodyText} >
            We have appointed a data protection manager (DPM) who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights (paragraph 9), please contact the DPM using the information set out in the contact details section (paragraph 10).
            </Typography>
            <ol>
                <li>
                    <Typography sx={Styles.header} >
                        The types of personal data we collect about you
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                        Personal data means any information about an individual from which that person can be identified.
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                    </Typography>
                    <ul>
                        <li>
                        <Typography sx={Styles.bodyText} >
                            Identity Data includes first name, last name, any previous names, title, date of birth and gender.
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={Styles.bodyText} >
                            Contact Data includes address, email address and telephone numbers.
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={Styles.bodyText} >
                            Message Content includes any additional information you voluntarily provide in the enquiry
                        </Typography>
                        </li>
                    </ul>
                    <Typography sx={Styles.header} >
                        How is your personal data collected?
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                        We mainly collect data about you through your interactions with us. You may give us your personal data when you contact us with an enquiry via the “Contact Us” link on our website or by corresponding with us subsequently by email, phone, post  or otherwise in relation to that enquiry.
                    </Typography>
                </li>
                <li>
                    <Typography sx={Styles.header} >
                    How we use your personal data
                    </Typography>
                    <Typography sx={Styles.header} >
                    Legal basis, purpose and personal data used
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    The law requires us to have a legal basis for collecting and using your personal data.
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    We will typically rely on our Legitimate interests to respond to questions, requests for information or other inquiries received through our “Contact Us” link. The type of information we will use for this purpose includes Identity Data, Contact Data, and Message Data.
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    When using Legitimate interests We make sure we consider and balance any potential impact on you and your rights (both positive and negative) before we process your personal data for this purpose. We do not use your personal data for activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law).
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    In some instances, we may be obliged to use your personal data where we have a Legal obligation to do so. For example we may use your Identity Data, Contact Data and Message Data where it is necessary for compliance with a legal obligation that we are subject to. We will identify the relevant legal obligation when we rely on this legal basis.
                    </Typography>
                    <Typography sx={Styles.header} >
                    Cookies
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    We do not currently use cookies or other tracking devices on this website.
                    </Typography>
                </li>
                <li>
                    <Typography sx={Styles.header} >
                    Disclosures of your personal data
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    We may share your personal data where necessary with the parties set out below for the purposes set out in paragraph 3 above
                    </Typography>
                    <ul>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        With third parties we use to help us run our business  such as our website host and cloud service providers.
                        </Typography>
                        </li>
                    </ul>
                    <Typography sx={Styles.bodyText} >
                    Occasionally we may also share your personal data with:
                    </Typography>
                    <ul>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        Our professional advisors (such as lawyers and other advisors, in which case the recipient of the information will be bound by confidentiality obligations)
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        Law enforcement agencies, courts, tribunals and regulatory bodies to comply with our legal and regulatory obligations.
                        </Typography>
                        </li>
                    </ul>
                    <Typography sx={Styles.bodyText} >
                    We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
                    </Typography>
                </li>
                <li>
                    <Typography sx={Styles.header} >
                    International transfers
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    We may transfer your personal data to service providers that carry out certain functions on our behalf. This may involve transferring personal data outside Gibraltar to countries which have laws that do not provide the same level of data protection as Gibraltar law.
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    Whenever we transfer your personal data out of Gibraltar to service providers, we ensure a similar degree of protection is afforded to it by ensuring that the following safeguards are in place:
                    </Typography>
                    <ul>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        We will only transfer your personal data to countries that have been deemed by the UK to provide an adequate level of protection for personal data; or
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        We may use specific standard contractual terms approved for use in Gibraltar which give the transferred personal data the same protection as it has in Gibraltar, namely the International Data Transfer Agreement or The International Data Transfer Addendum to the European Commission’s standard contractual clauses for international data transfers. To obtain a copy of these contractual safeguards, please contact us at privacy@veridian.com).
                        </Typography>
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography sx={Styles.header} >
                    Data security
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                    </Typography>
                </li>
                <li>
                    <Typography sx={Styles.header} >
                    Data retention
                    </Typography>
                    <Typography sx={Styles.header} >
                    How long will you use my personal data for?
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    Typically we will keep your Identity Data, Contact Data, and Message Data for a period of 7 years after we cease communicating with you.
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    In some circumstances you can ask us to delete your data: see [paragraph 8] below for further information.
                    </Typography>
                </li>
                <li>
                    <Typography sx={Styles.header} >
                    Your legal rights
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    You have a number of rights under data protection laws in relation to your personal data.
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    You have the right to:
                    </Typography>
                    <ul>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        Request access to your personal data (commonly known as a "subject access request"). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        Request correction of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        Request erasure of your personal data in certain circumstances. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        Object to processing of your personal data where we are relying on a legitimate interest (or those of a third party) as the legal basis for that particular use of your data (including carrying out profiling based on our legitimate interests). In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your right to object.
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        You also have the absolute right to object any time to the processing of your personal data for direct marketing purposes.
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        Request the transfer of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        Withdraw consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.
                        </Typography>
                        </li>
                        <li>
                        <Typography sx={Styles.bodyText} >
                        Request restriction of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in one of the following scenarios:
                        </Typography>
                        </li>
                        <ul>
                            <li>
                            <Typography sx={Styles.bodyText} >
                            If you want us to establish the data's accuracy;
                            </Typography>
                            </li>
                            <li>
                            <Typography sx={Styles.bodyText} >
                            Where our use of the data is unlawful but you do not want us to erase it;
                            </Typography>
                            </li>
                            <li>
                            <Typography sx={Styles.bodyText} >
                            Where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or
                            </Typography>
                            </li>
                            <li>
                            <Typography sx={Styles.bodyText} >
                            You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.
                            </Typography>
                            </li>
                        </ul>
                    </ul>
                    <Typography sx={Styles.bodyText} >
                    If you wish to exercise any of the rights set out above, please contact us at privacy@veridian.com.
                    </Typography>
                    <Typography sx={Styles.header} >
                    No fee usually required
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.
                    </Typography>
                    <Typography sx={Styles.header} >
                    What we may need from you
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
                    </Typography>
                    <Typography sx={Styles.header} >
                    Time limit to respond
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
                    </Typography>
                </li>
                <li>
                    <Typography sx={Styles.header} >
                    Contact details
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    If you have any questions about this privacy policy or about the use of your personal data or you want to exercise your privacy rights, please contact our DPM at privacy@veridian.com .
                    </Typography>
                </li>
                <li>
                    <Typography sx={Styles.header} >
                    Complaints
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    You have the right to make a complaint at any time to the Information Commissioner’s Office in Gibraltar through the Gibraltar Regulatory Authority (GRA), the Gibraltar regulator for data protection issues (www.gra.gi). We would, however, appreciate the chance to deal with your concerns before you approach the GRA so please contact us in the first instance.
                    </Typography>
                </li>
                <li>
                    <Typography sx={Styles.header} >
                    Changes to the privacy policy and your duty to inform us of changes
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    We keep our privacy policy under regular review. This version was last updated on 11 November 2024.
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us, for example a new address or email address.
                    </Typography>
                </li>
                <li>
                    <Typography sx={Styles.header} >
                    Third-party links
                    </Typography>
                    <Typography sx={Styles.bodyText} >
                    This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                    </Typography>
                </li>
            </ol>
            </Box>
        </Stack>
        
      </Box>
    </Box>
  );
}

export default PrivacyPolicy;
