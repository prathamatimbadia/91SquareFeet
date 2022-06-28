import React from 'react'
import './Footer.css'
import logo from '../../assets/images/Group 17273.svg'

const Footer = () => {
    let addressLine1 = '24,Vaishnavi Centre,Raja Park,'
    let addressLine2 = '51,Dhanana,Panipat,Haryana'
    let addressLine3 = 'Pincode-154419'
    let copywrite = '© 2022 STAR. All Rights Reserved. Weekend watch’s all related Movies and TV Shoes are part of copyright.';
    let getInvolved = [
        { id: 1, name: 'Contribution Guideline' },
        { id: 2, name: 'Add New Movie' },
        { id: 3, name: 'Add New TV Show' }
    ];
    let basics = [
        { id: 1, name: 'About weekend watch' },
        { id: 2, name: 'Contact Us' },
        { id: 3, name: 'Support' },
        { id: 4, name: 'API' }
    ];
    let community = [
        { id: 1, name: 'Guidelines' },
        { id: 2, name: 'Discussions' },
        { id: 3, name: 'Leaderboard' },
        { id: 4, name: 'Tweeter' }
    ];

    let legal = [
        { id: 1, name: 'Terms of use' },
        { id: 2, name: 'API Terms of use' },
        { id: 3, name: 'Privacy Policy' }
    ];

    return (
        <div className='footer'>
            <div className='footer__options'>
                <div className='footer__companyInfo'>
                    <img className='companyLogo' src={logo} alt='logo'></img>
                    <div className='companyAddress'>
                        <p>{addressLine1}</p>
                        <p>{addressLine2}</p>
                        <p>{addressLine3}</p>
                    </div>
                </div>
                <div className='footer__companyInfo2'>
                    <div className='row'>
                        <div className='footer__column'>
                            <p className='heading'>THE BASICS</p>
                            {basics.map((item) => (
                                <p className='items' key={item.id}>{item.name}</p>
                            ))}
                        </div>
                        <div className='footer__column'>
                            <p className='heading'>GET INVOLVED</p>
                            {getInvolved.map((item) => (
                                <p className='items' key={item.id}>{item.name}</p>
                            ))}
                        </div>
                        <div className='footer__column'>
                            <p className='heading'>COMMUNITY</p>
                            {community.map((item) => (
                                <p className='items' key={item.id}>{item.name}</p>
                            ))}
                        </div>
                        <div className='footer__column'>
                            <p className='heading'>LEGAL</p>
                            {legal.map((item) => (
                                <p className='items' key={item.id}>{item.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__copyright'>
                <span className='copyright__content'>{copywrite}</span>
                <span className='countrySelection'>
                    <img alt='flag'
                        className='countryFlag'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf/////lycAgQAAAIgAAIUAAH4AAIIAAIMAAHwAAHPi4u+kpMvz8/kAAHjn5/Lt7fXd3ey5uddPT6GZmcWDg7n6+v7Ly+HIyOJERJxlZao+PponJ5L29vy0tNbW1uggIJCfn8iGhrsYGJBNTaB2drQQEIx+fripqc5ra62QkMBXV6QiIpFfX6i+vtwyMpw6Opg1NZe0gadDAAAEvUlEQVR4nO3ba3OiSBiG4UzvdDcip8YDiAdQZAIxExP//4/btzHjZH1Nze6HpVPlc1Ul0eiH9g7Q2JKHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+gvuPYg4BqacGjCoQmHJhyacF+hSTI5LFd7uV8tD5PE9WDEF2gSHNbaGyklpVRq5Omfh8D1kBw3qaZ6pCiGVFrr/oYc6SZ3OyinTZIpdZCeevnhNyY1jf/jRXm0vejG6S7kssnObhmeNxMbcTSiEuZIt2aeZ7eancNxOWzy7NFrn3cnI/p9pbTfcmFO3ZxaeVN3A3PWJNrS5lAEmb3d5wgvt7KgoMe2kauhuWoSPdK2QHvIwt5ZpPTtQF/p+S7tVbQNPbqK4qhJRluJ17VGZB3di2yPF/o62AxdJkzbUZRt5mZwjpo0lOTY3wrtFGMPHq/vP5N+JxJHiuLomOKmycyTXinOUewLX1IYSTmW7/cpiSjpOTMno3PSJNA049TnQ4gIae8J6cVrSkWbSNdvJvRITbOPdnJO66RJo1QzM3RjaY8YMhLVVmR+JraViGhzEZn9vZnZp7kYnosmCy31+UR180oH1a4QWWyiODJxJhqajaPTpn80oee5OM130WSlVL3pZ11hJO0daiLWITUJ12KiaM+Spn9ssamVKhyMz0GTVNsDrOi6/o5fiVKLdmVis2qFLkXl27OV/rhCh1mdDj9AB01qmoftnz+Z2ir5+Cjk08JP49RfPElxHNvdpZvao2vhyVE9/AAdNHmkOfZ8ihpK2l4m4y4fJ7ryKp2M8248oe1D7vrHDc3Z++EHOHwTmojlr9tRISciHB/beZ3v87puj+OdmMiV+fUE6WI6Hr5J6amnaFEuzptK6av8GAfrKmzDah3Ex/zR798Iik1e5tGT8srBRzh8k7lSLf1ID9NlWNF5yHLcBuugLd6KNl0H87E9N0m7p+Zgj66tUvPBRzh8k2cl/fNZRzLbxut2kczXaWFXIEdFsG6TfH6KH2fnPSb3pXoefITDN3lVanpZBTDhytd12o6kNWrTg/ZPu8vKYzRV6nXwEQ7fRErvkiSLIpNWeViovokqdnmVmii6LBJE3u8D8mCcNEmqYzhbnqT2/TiOvX37Js/e6q1Hv4l9LX8+H8IyT++mCbaTK1fHkzccTz7OO8Hveafp550mWM/vct6Zn085cH7ywe3z2JTOY9O7PY/F+50b9vS++PyiP3tfPLm398WiHv15/aTs109Wd7N+gnW2G4p/uR6b3c96rMiv1u2bT9btgztat+8/3zmY989xbn6+I+7t8x18DngLPi++YYrrChhcf3IDrlO6IdqOpCpSXM/2D/11j234yXWPwy+bXOD6WO5rXkc9vdvrqAWut78N/5dx08f/3zF/fvr/7is0+WrQhEMTDk04NOHQhHv4DtcevsE1NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMT7m/cNifkUwM0UQAAAABJRU5ErkJggg=='>
                    </img>
                    <span className='countryName'>India</span>
                    <span>
                        <img className='dropdownIcon' alt='dropDownIcon'
                            src='data:image/png;base64,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'></img>
                    </span>
                </span>

            </div>

        </div>
    )
}

export default Footer