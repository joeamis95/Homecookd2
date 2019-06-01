import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PhotoUploadButton from './PhotoUploadButton.js';
import TermsConditionsCheckBox from './TermsConditionsCheckBox.js';
import SellerRegistryButton from './SellerRegistryButton.js';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const US_States = [

    {
        name: "Alabama",
        abbreviation: "AL"
    },
    {
        name: "Alaska",
        abbreviation: "AK"
    },
    {
        name: "American Samoa",
        abbreviation: "AS"
    },
    {
        name: "Arizona",
        abbreviation: "AZ"
    },
    {
        name: "Arkansas",
        abbreviation: "AR"
    },
    {
        name: "California",
        abbreviation: "CA"
    },
    {
        name: "Colorado",
        abbreviation: "CO"
    },
    {
        name: "Connecticut",
        abbreviation: "CT"
    },
    {
        name: "Delaware",
        abbreviation: "DE"
    },
    {
        name: "District Of Columbia",
        abbreviation: "DC"
    },
    {
        name: "Federated States Of Micronesia",
        abbreviation: "FM"
    },
    {
        name: "Florida",
        abbreviation: "FL"
    },
    {
        name: "Georgia",
        abbreviation: "GA"
    },
    {
        name: "Guam",
        abbreviation: "GU"
    },
    {
        name: "Hawaii",
        abbreviation: "HI"
    },
    {
        name: "Idaho",
        abbreviation: "ID"
    },
    {
        name: "Illinois",
        abbreviation: "IL"
    },
    {
        name: "Indiana",
        abbreviation: "IN"
    },
    {
        name: "Iowa",
        abbreviation: "IA"
    },
    {
        name: "Kansas",
        abbreviation: "KS"
    },
    {
        name: "Kentucky",
        abbreviation: "KY"
    },
    {
        name: "Louisiana",
        abbreviation: "LA"
    },
    {
        name: "Maine",
        abbreviation: "ME"
    },
    {
        name: "Marshall Islands",
        abbreviation: "MH"
    },
    {
        name: "Maryland",
        abbreviation: "MD"
    },
    {
        name: "Massachusetts",
        abbreviation: "MA"
    },
    {
        name: "Michigan",
        abbreviation: "MI"
    },
    {
        name: "Minnesota",
        abbreviation: "MN"
    },
    {
        name: "Mississippi",
        abbreviation: "MS"
    },
    {
        name: "Missouri",
        abbreviation: "MO"
    },
    {
        name: "Montana",
        abbreviation: "MT"
    },
    {
        name: "Nebraska",
        abbreviation: "NE"
    },
    {
        name: "Nevada",
        abbreviation: "NV"
    },
    {
        name: "New Hampshire",
        abbreviation: "NH"
    },
    {
        name: "New Jersey",
        abbreviation: "NJ"
    },
    {
        name: "New Mexico",
        abbreviation: "NM"
    },
    {
        name: "New York",
        abbreviation: "NY"
    },
    {
        name: "North Carolina",
        abbreviation: "NC"
    },
    {
        name: "North Dakota",
        abbreviation: "ND"
    },
    {
        name: "Northern Mariana Islands",
        abbreviation: "MP"
    },
    {
        name: "Ohio",
        abbreviation: "OH"
    },
    {
        name: "Oklahoma",
        abbreviation: "OK"
    },
    {
        name: "Oregon",
        abbreviation: "OR"
    },
    {
        name: "Palau",
        abbreviation: "PW"
    },
    {
        name: "Pennsylvania",
        abbreviation: "PA"
    },
    {
        name: "Puerto Rico",
        abbreviation: "PR"
    },
    {
        name: "Rhode Island",
        abbreviation: "RI"
    },
    {
        name: "South Carolina",
        abbreviation: "SC"
    },
    {
        name: "South Dakota",
        abbreviation: "SD"
    },
    {
        name: "Tennessee",
        abbreviation: "TN"
    },
    {
        name: "Texas",
        abbreviation: "TX"
    },
    {
        name: "Utah",
        abbreviation: "UT"
    },
    {
        name: "Vermont",
        abbreviation: "VT"
    },
    {
        name: "Virgin Islands",
        abbreviation: "VI"
    },
    {
        name: "Virginia",
        abbreviation: "VA"
    },
    {
        name: "Washington",
        abbreviation: "WA"
    },
    {
        name: "West Virginia",
        abbreviation: "WV"
    },
    {
        name: "Wisconsin",
        abbreviation: "WI"
    },
    {
        name: "Wyoming",
        abbreviation: "WY"
    },
];

function SellerSignUpForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    state_names: "AL",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.name});
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required="true"
        id="first-name"
        label="First Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        autoComplete="first-name"
        margin="normal"
      />
      <TextField
        required
        id="last-name"
        label="Last Name"
        className={classes.textField}
        autoComplete="last-name"
        margin="normal"
      />
      <TextField
        required
        id="standard-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        margin="normal"
      />
      <TextField
        required
        id="standard-password-input-confirm"
        label="Confirm Password"
        className={classes.textField}
        type="password"
        margin="normal"
      />
      <TextField
        required
        id="email-address"
        label="Email Address"
        className={classes.textField}
        autoComplete="email-address"
        margin="normal"
      />
      <TextField
        required
        id="current-street-address"
        label="Street Address"
        className={classes.textField}
        autoComplete="current-street-address"
        margin="normal"
      />
      <TextField
        required
        id="current-city"
        label="City"
        className={classes.textField}
        autoComplete="current-city"
        margin="normal"
      />
      <TextField
        required="true"
        id="current-state"
        select
        label="State"
        className={classes.textField}
        value={values.state_names}
        onChange={handleChange('state_names')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        autoComplete="current-state"
        margin="normal"
      >
        {US_States.map(option => (
          <MenuItem key={option.name} value={option.name}>
            {option.abbreviation}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        required
        id="current-zipcode"
        label="Zip Code"
        className={classes.textField}
        autoComplete="current-zipcode"
        margin="normal"
      />
      <TextField
        required
        id="food-handling-license"
        label="Food Handling License"
        className={classes.textField}
        fullWidth="true"
        margin="normal"
      />
      <TextField
        required
        id="bank-routing-number"
        label="Bank Routing Number"
        className={classes.textField}
        fullWidth="true"
        margin="normal"
      />
      <TextField
        required
        id="bank-account-number"
        label="Bank Account Number"
        className={classes.textField}
        fullWidth="true"
        margin="normal"
      />
      <TextField
        required
        id="bank-account-number-confirm"
        label="Confirm Bank Account"
        className={classes.textField}
        fullWidth="true"
        margin="normal"
      />
      <TextField
        required
        id="seller-bio"
        label="Bio"
        style={{ margin: 8 }}
        placeholder="Tell us about yourself!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <PhotoUploadButton/>
      <TermsConditionsCheckBox/>
      <SellerRegistryButton/>
    </form>
  );
}

export default SellerSignUpForm;
