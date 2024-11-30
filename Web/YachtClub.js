// Description: St. John's Marina & Yacht Club
// Author: Danielle Clarke
// Dates: Nov 15-29, 2024

// Define program constants.

let EVEN_SITE = 80.0;
let ODD_SITE = 120.0;
let ALT_MEM = 5.0;
let CLEAN_CHARGE = 50.0;
let VIDEO_SUR = 50.0;
let HST = 0.15;
let STANDARD_DUE = 75.0;
let EXECUTIVE_DUE = 150.0;
let PROCESS_FEE = 59.99;
let CANCEL_FEE = 0.6;

// Define format options for printing.
const cur2Format = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: "2",
  maximumFractionDigits: "2",
});

// Gather uer input.

const CurDate = new Date();
// Get year, month, and day
const Year = CurDate.getFullYear();
let Month = CurDate.getMonth() + 1;
let Day = CurDate.getDate();
Month = Month < 10 ? "0" + Month : Month; // keeps it 2 digits
Day = Day < 10 ? "0" + Day : Day;
const FormattedDate = Year + "-" + Month + "-" + Day;

// Build the date in YYYY-MM-DD format
const formattedDate = Year + "-" + Month + "-" + Day;
let SiteNum = prompt("What is the site number: ", 100);
let CustName = prompt("What is the members name: ");
let StAdd = prompt("What is their street address: ");
let City = prompt("What is their city: ");
let Prov = prompt("What is their province: ", "XX");
let PostCode = prompt("What is the postal code: ", "X0X0X0");
let Phone = prompt("What is the members phone number: ", "XXXXXXXXXX");
let Cell = prompt("What is the members cell phone number: ", "XXXXXXXXXX");
let MemType = prompt(
  "Is the member a Standard or Executive member: ",
  "S or E"
);
MemType = MemType.toUpperCase();
let AltMem = prompt("How many alternate members are there: ");
let WeekSiteClean = prompt("Would they like weekly site cleaning: ", "Y or N");
WeekSiteClean = WeekSiteClean.toUpperCase();

if (WeekSiteClean == "Y") {
  CleanYN = "Yes";
} else {
  CleanYN = "No";
}

let VideoSurv = prompt("Would they like video surveillance: ", "Y or N");
VideoSurv = VideoSurv.toUpperCase();

if (VideoSurv == "Y") {
  VideoYN = "Yes";
} else {
  VideoYN = "No";
}

// Calculate program results.

if (SiteNum % 2 == 0) {
  EvenOrOdd = EVEN_SITE;
} else {
  EvenOrOdd = ODD_SITE;
}

let AltMemCharge = ALT_MEM * AltMem;
let SiteCharge = EvenOrOdd + AltMemCharge;

if (WeekSiteClean == "Y") {
  Clean = CLEAN_CHARGE;
} else {
  Clean = 0;
}

if (VideoSurv == "Y") {
  Video = VIDEO_SUR;
} else {
  Video = 0;
}

let ExtraCharges = Clean + Video;
let SubTotal = SiteCharge + ExtraCharges;
let Taxes = SubTotal * HST;
TotalMonChar = SubTotal + Taxes;

if (MemType == "S") {
  Member = STANDARD_DUE;
} else {
  Member = EXECUTIVE_DUE;
}

if (MemType == "S") {
  Type = "Standard";
} else {
  Type = "Executive";
}

let TotalMonthlyFees = TotalMonChar + Member;
let TotalYearlyFees = TotalMonthlyFees * 12;
let MonthlyPayment = (TotalYearlyFees + PROCESS_FEE) / 12;

let CancellationFee = SiteCharge * 12 * 0.6;

// Display

document.write(
  "<table class='receipttable' style='border-collapse: collapse;'>"
); // I couldnt figure out how to remove only the line between the columns so I did 1 column with the lovely &nbsp - ugly but works
document.write(
  "<tr><th class='centertext' colspan='2'><br />St. John's Marina & Yacht Club<br />Yearly Member Receipt<br /><br /></th></tr>"
);
document.write(
  "<tr><td class='lefttext' colspan='2' style='width: 100%;'><br /> Client Name and Address:<br /><br />" +
    CustName +
    "<br />" +
    StAdd +
    "<br />" +
    City +
    ", " +
    Prov +
    " " +
    PostCode +
    "<br /><br /> Phone: " +
    Phone +
    " (H)" +
    "<br />" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    Cell +
    " (C)" +
    "<br /></td></tr>"
);
document.write(
  "<tr><td>Site #:" +
    " " +
    SiteNum +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    "Member type:" +
    " " +
    Type +
    "<br /></td></tr>"
);
document.write(
  "<tr><td>Alternate members: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    AltMem +
    "<br />Weekly site cleaning:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;" +
    CleanYN +
    "<br />Video Surveillance:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;" +
    VideoYN +
    "</td></tr>"
);
document.write(
  "<tr><td>Site charges: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    cur2Format.format(SiteCharge) +
    "<br />Extra charges:" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    cur2Format.format(ExtraCharges) +
    "</td></tr>"
);

document.write(
  "<tr><td>Subtotal: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    cur2Format.format(SubTotal) +
    "<br />Sales tax (HST):" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    cur2Format.format(Taxes) +
    "</td></tr>"
);

document.write(
  "<tr><td>Total monthly fees: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    cur2Format.format(TotalMonthlyFees) +
    "<br />Total yearly fees:" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    cur2Format.format(TotalYearlyFees) +
    "</td></tr>"
);

document.write(
  "<tr><td>Monthly payment: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    cur2Format.format(MonthlyPayment) +
    "<br /><br />" +
    "<br />Issued:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    FormattedDate +
    "<br />" +
    "<br />HST Reg No:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;549-33-5849-47<br /><br />Cancellation fee:" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    cur2Format.format(CancellationFee) +
    "</td></tr>"
);

document.write("</table>");
