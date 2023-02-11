import "./App.css";
import Header from "./components/header/header";
import StateListDisplay from "./components/neftPage/stateListDisplay/StateListDisplay";

function App() {

  const cnfWithAddress = [
    {
      name: "Aristo Pharmaceuticals Pvt. Ltd.",
      address: "S.P. Verma Road",
      address1: " ",
      address2: " ",
      city: "Patna",
      pin: 800001,
      contactNo: Number(6122216125)
    },
    {
      name: "Alkem Laboratories Ltd.",
      address: "Exhibition Road,",
      address1: "Near Kiriti Fuels Petrol Pump",
      address2: "Naya Tola Kumharar, Main road Kankarbagh",
      city: "Patna",
      pin: 800020,
      contactNo: Number(7979734827)
    },
    {
      name: "Albert David Ltd.",
      address: "2nd Floor, Block B and C",
      address1: "shazia Complex",
      address2: "new Bypass road, Anishabad",
      city: "Patna",
      pin: 800002,
      contactNo: Number(9934027180)
    },
    {
      name: "Aglowmed Ltd",
      address: "Plot No.6 Holding No. 50B",
      address1: "Near Krishna Niketan School",
      address2: "Jakariyapur",
      city: "Patna",
      pin: 800007,
      contactNo: Number(9504641841)
    },
    {
      name: "Anglo French Drugs and Ltd.",
      address: "Shri Ganpati Enterprises",
      address1: "Plot No. A6/A7",
      address2: "Transport Nagar(Pahadi)",
      city: "Patna",
      pin: 800007,
      contactNo: Number(9852361843)
    },
    {
      name: "Abbott Healthcare Pvt. Ltd",
      address: "Off. Godam-Rakibganj Opp. Electricty Board",
      address1: "katra, Didarganj, P.O. Madhomill",
      address2: "P.S. Malsalamt",
      city: "Patna",
      pin: 800008,
      contactNo: Number(7759845905)
    },
    {
      name: "Alembic Pharmaceuticals Ltd.",
      address: "2nd floor Shardhalok",
      address1: "Opp. Canara bank, sandalpur",
      address2: "road,kumharar gumti",
      city: "Patna",
      pin: 800020,
      contactNo: Number(8877769900)
    },
    {
      name: "Beierdort India Pvt. Ltd.",
      address: "C/O Astro Medicare Pvt. Ltd.",
      address1: "giriraj bhawan",
      address2: "sandalpur road,kumharar gumti",
      city: "Patna",
      pin: 800006,
      contactNo: Number(8271897234)
    },

    {
      name: "Biological E. Limited",
      address: "Siddhi vinayak enterprises",
      address1: "1st floor sardhalok",
      address2: "sandalpur roar,kumharar gumti",
      city: "Patna",
      pin: 800006,
      contactNo: Number(9534300050)
    },

    {
      name: "Blue Cross Labs Ltd.",
      address: "Plot no. A6/A7",
      address1: "transport nagar,bahadurpur",
      address2: "HSC colony",
      city: "Patna",
      pin: 800007,
      contactNo: Number(7488526456)
    },
    {
      name: "Centaur Pharmaceuticals Pvt. Ltd.",
      address: "C/O Maa Ami Lab pvt. ltd.",
      address1: "mehata,bhawan",
      address2: "kumbherar gumti",
      city: "Patna",
      pin: 800006,
      contactNo: Number(9905206107)
    },
    {
      name: "Zydus Healthcare Ltd.",
      address: "Kalputra Tower",
      address1: "patna gaya road",
      address2: "elahibad PO. Bariya",
      city: "Patna",
      pin: 800007,
      contactNo: Number(9431243382)
    },
    {
      name: "Cadila Pharmaceuticals Ltd.",
      address: "N.K. Enterprises",
      address1: "kalputra tower",
      address2: "patna gaya road,elahibad",
      city: "Patna",
      pin: 800007,
      contactNo: Number(9431243382)
    },
    {
      name: "Cadila healthcare Ltd. (VET)",
      address: "C/O ms. M.P and sons",
      address1: "kalutra tower",
      address2: "patna gaya road, ellahibagh",
      city: "Patna",
      pin: 800007,
      contactNo: Number(9488961946)
    },
    {
      name: "Cipla Ltd.",
      address: "Block-B kohinoor complex",
      address1: "beside shalimar cold storage",
      address2: "bypass road, amishabad",
      city: "Patna",
      pin: 800002,
      contactNo: Number(9771419131)
    },
    {
      name: "Cachet Pharmaceuticals Pvt. Ltd.",
      address: "Exhibition road",
      address1: "alkem bhawan",
      address2: "Patna",
      city: "Patna",
      pin: 800001,
      contactNo: "0612-2322570/588"
    },
    {
      name: "Dey's Medical Store Pvt. Ltd.",
      address: "C/O Arya remidies pvt. ltd.",
      address1: "sahara road, choti",
      address2: "pahari, agamkyan,PO. gulzarbagh",
      city: "Patna",
      pin: 800007,
      contactNo: "9693251183 0612-2340767"
    },
    {
      name: "East India Pharmaceuticals Works Ltd.",
      address: "New electricty office",
      address1: "transport nagar,B-93",
      address2: "main road, gate no. 1",
      city: "Patna",
      pin: 800007,
      contactNo: "9934543196"
    },
    {
      name: "Franco India Pharmaceuticals Pvt. Ltd.",
      address: "Rishav Enterprises, badudleo",
      address1: "sadan, new sandalpur road",
      address2: "kumaharar gumti, bennibad",
      city: "Patna",
      pin: 800006,
      contactNo: "9334736137"
    },
    {
      name: "Glaxo Smithklien Pharmaceuticals Ltd.",
      address: "C/O Pradeep enterprises",
      address1: "bari pahari",
      address2: "gaya masouri road",
      city: "Patna",
      pin: 800007,
      contactNo: "9308203045"
    },
    {
      name: "Glenmark Pharmaceuticals",
      address: "B.S. enterprises",
      address1: "1st floor, 103/104 Abhishek",
      address2: "plaza,exhibition road",
      city: "Patna",
      pin: 800007,
      contactNo: "8226971365"
    },
    {
      name: "Himalaya Wellness Company",
      address: "Plot no A6 & A7",
      address1: "transport nagar",
      address2: "patna",
      city: "Patna",
      pin: 800007,
      contactNo: "93343885706/3"
    },
    {
      name: "Ipca Laboratories Ltd.",
      address: "H/O Laxmi mahato & babita devi",
      address1: "chak milki road,",
      address2: "sadar",
      city: "Patna",
      pin: 800007,
      contactNo: "9334183353"
    },
    {
      name: "J.B. Chemicals & Phamraceuticals Ltd.",
      address: "Shanti niketan",
      address1: "Frazer road",
      address2: "",
      city: "Patna",
      pin: 800001,
      contactNo: "8210258773"
    },
    {
      name: "Juggat Pharma",
      address: "Gopal market",
      address1: "mehata bhawan",
      address2: "new kumarar gumti",
      city: "Patna",
      pin: 800006,
      contactNo: "9835663518"
    },
    {
      name: "Lupin Ltd.",
      address: "Om niwas, ellahibagh",
      address1: "near mahindara",
      address2: "patna gaya road",
      city: "Patna",
      pin: 800005,
      contactNo: "9973612746"
    },
    {
      name: "Laborate Phamraceuticals India Ltd.",
      address: "Transport nagar,",
      address1: "gate no. 1",
      address2: "patna",
      city: "Patna",
      pin: 800026,
      contactNo: ""
    }

    // {
    //   name: "",
    //   address: "",
    //   address1: "",
    //   address2: "",
    //   city: "Patna",
    //   pin: 800,
    //   contactNo: Number(),
    // },
  ];

  const biharArray = [
    {
      name: "Aristo Pharmaceuticals Pvt Ltd",
      accNo: 40578876323,
      ifscCode: "SBIN0000152",
      branch: "West Gandhi Mandir Patna",
      bank: "State Bank of India",
      amount: 0
    }
  ];

  const otherStateArray = [
    {
      name: "Ajay Pharmaceuticals",
      accNo: 386505040000108,
      ifscCode: "UBIN0538655",
      branch: "Bisheshwarganj Varanasi",
      bank: "Union Bank of India",
      amount: 0
    },

    {
      name: "J.P. Brothers",
      accNo: 10878640000168,
      ifscCode: "HDFC0001087",
      branch: "Ramkatora Varanasi",
      bank: "HDFC Bank",
      amount: 0
    },
    {
      name: "Rastogi Aushdhi Kendra",
      accNo: 2312077121,
      ifscCode: "KKBK0005291",
      branch: "Rathyatra Varanasi",
      bank: "Kotak Mahindra Bank",
      amount: 0
    },
    {
      name: "K.V Medical Agency",
      accNo: 35042952214,
      ifscCode: "SBIN0004558",
      branch: "Varanasi",
      bank: "State Bank of India",
      amount: 0
    },
    {
      name: "Shilpi Pharma",
      accNo: 3865001010039516,
      ifscCode: "UBIN0538655",
      branch: "Varanasi",
      bank: "Union Bank of India",
      amount: 0
    },
    {
      name: "New Manish Surgicals",
      accNo: 436305043632,
      ifscCode: "UBIN0543632",
      branch: "Aurgabade Varanasi",
      bank: "Uinon Bank of India",
      amount: 0
    },
    {
      name: "Shri Awdesh Brothers",
      accNo: 386501010040304,
      ifscCode: "UBIN0538655",
      branch: "Varanasi",
      bank: "Union Bank of India",
      amount: 0
    },
    {
      name: "United Pharmaceuticals",
      accNo: 98180200000138,
      ifscCode: "BARB0EXTCHO",
      branch: "Gopal Mandir Varanasi",
      bank: "Bank of Baroda",
      amount: 0
    },
    {
      name: "J.P. Drug Emporium",
      accNo: 50200027401171,
      ifscCode: "HDFC0009136",
      branch: "Bulanala Varanasi",
      bank: "HDFC Bank",
      amount: 0
    },
    {
      name: "A.P. Medico",
      accNo: 10872320001110,
      ifscCode: "HDFC0001087",
      branch: "Bulanala Varanais",
      bank: "HDFC Bank",
      amount: 0
    },
    {
      name: "J.P. Surgicals",
      accNo: 416801011011473,
      ifscCode: "UBIN0541681",
      branch: "Kabir Chauraha Varanasi",
      bank: "Union Bank of India",
      amount: 0
    },
    {
      name: "Shri S.N. Pharmaceuticals",
      accNo: 386501010039487,
      ifscCode: "UBIN0538655",
      branch: "Bisheshwarganj Varanasi",
      bank: "Union Bank of India",
      amount: 0
    },
    {
      name: "Arora Surgicals",
      accNo: 28490100004686,
      ifscCode: "0",
      branch: "Ramnagar Varanasi",
      bank: "Bank of Baroda",
      amount: 0
    },
    {
      name: "Sunil Surgicals Emporium",
      accNo: 691520110000040,
      ifscCode: "BKID0006915",
      branch: "Varanasi",
      bank: "Bank of India",
      amount: 0
    },
    {
      name: "Gupta Enterprises",
      accNo: 50200066663781,
      ifscCode: "HDFC0009136",
      branch: "Bulanala Varanasi",
      bank: "HDFC Bank",
      amount: 0
    },
    {
      name: "G.R. Distributors",
      accNo: "00710500000170", // this is made string
      ifscCode: "BARB0VARANA",
      branch: "Varanasi",
      bank: "Bank of Baroda",
      amount: 0
    },
    {
      name: "Yash Trading Company",
      accNo: 386501010039795,
      ifscCode: "UBIN0538655",
      branch: "Bisheshwarganj Varanasi",
      bank: "Union Bank of India",
      amount: 0
    },
    {
      name: "Anglo Ayurvedic Medicals",
      accNo: 12330500015738,
      ifscCode: "BARB0VISHES",
      branch: "Bisheshwarganj Varanasi",
      bank: "Bank of Baroda",
      amount: 0
    },
    {
      name: "New D.S. Pharmaceuticals",
      accNo: 649201010050270,
      ifscCode: "UBIN0564923",
      branch: "D.A.V. College Varanasi",
      bank: "Union Bank of India",
      amount: 0
    },
    {
      name: "Shree Manish Medical Agency",
      accNo: 386501010039681,
      ifscCode: "UBIN0538655",
      branch: "Bisheshwarganj Varanasi",
      bank: "Ubion Bank of India",
      amount: 0
    },
    {
      name: "Shi S.N. Medical",
      accNo: 50200027269264,
      ifscCode: "HDFC0009136",
      branch: "Bulanala Varanasi",
      bank: "HDFC Bank",
      amount: 0
    },
    {
      name: "J.P. Rehabilation",
      accNo: 416801011011788,
      ifscCode: "UBIN0541681",
      branch: "kabir Chaura Varanasi",
      bank: "Union Bank of India",
      amount: 0
    },
    {
      name: "Pramarth Medical Agency",
      accNo: 98180400000083, //check acc no (no of zeros)
      ifscCode: "BARB0EXTCHO",
      branch: "Gopal Mandir Varanasi",
      bank: "Bank of Baroda",
      amount: 0
    },
    {
      name: "New P.L. Pharma",
      accNo: 386501010039674,
      ifscCode: "UBIN0538655",
      branch: "Varanasi",
      bank: "United Bank of India",
      amount: 0
    },

    {
      name: "Maroo & Maroo",
      accNo: 50200040418249,
      ifscCode: "HDFC0009136",
      branch: "Bulanala Varanasi",
      bank: "HDFC Bank",
      amount: 0
    },

    {
      name: "Shilpi Ayurved",
      accNo: 386501010039801,
      ifscCode: "UBIN0538655",
      branch: "Bisheshwarganj Varanasi",
      bank: "Union Bank of India",
      amount: 0
    },
    {
      name: "Gopi Ram Sham Sunder",
      accNo: 60328587410,
      ifscCode: "MAHB0000472",
      branch: "Varanasi",
      bank: "Bank of Maharastra",
      amount: 0
    },

    {
      name: "Delux Pharma",
      accNo: 129705000028,
      ifscCode: "ICIC0001297",
      branch: "Bisheshwarganj Varanasi",
      bank: "ICICI Bank",
      amount: 0
    },
    {
      name: "National Stores Agency",
      accNo: 386504010031124,
      ifscCode: "UBIN0538655",
      branch: "Varanasi",
      bank: "Union Bank of India",
      amount: 0
    },
    {
      name: "Bhawana Agencies",
      accNo: 50200010077415,
      ifscCode: "HDFC0000723",
      branch: "Lucknow",
      bank: "HDFC Bank",
      amount: 0
    }

    // {
    //     name: "",
    //     accNo: ,
    //     ifscCode: "",
    //     branch: "Varanasi",
    //     bank: "",
    //     amount:0,
    // },
  ];

  return (
    <div className="App">
      <Header />
      <StateListDisplay
        biharArray={biharArray}
        otherStateArray={otherStateArray}
      />
    </div>
  );
}

export default App;
