# Description: One Stop Insurance Company
# Author: Danielle Clarke 
# Date(s): Nov 15-29, 2024


# Define required libraries.
import FormatValues as FV 
import datetime
from datetime import datetime, timedelta

# Define program constants.
NEXT_POL_NUM = 1944
BASIC_PREM = 869.00
ADD_CAR_DISC = .25
COST_EXT_LIAB_COV = 130.00
GLASS_COV = 86.00
LOAN_CAR_COV = 58.00
HST_RATE = .15
MONTH_PAY_PROS_FEE = 39.99

CUR_DATE = datetime.now()
# CUR_DATE = datetime.datetime.now()

PROV_LST = ["NL", "NS", "NB", "PE", "QC", "ON", "MB", "SK", "AB", "BC", "NT", "YT", "NV"]
Claim_Num_Lst = ["85446", "83657", "83748"]
Claim_Date_Lst = ["2024-10-10", "2024-06-11", "2024-01-19"]
Claim_Amt_Lst = [343.56, 1793.52, 11787.11]


# Define program functions.



# Main program starts here.
while True:

    # Gather user inputs.

    while True:
        FName = input("Enter the customers first name: ").title()

        if FName == "":
            print()
            print("   Data Entry Error - Customers first name must be entered...")
            print()
        else:
            break

    while True:
        LName = input("Enter the customers last name: ").title()

        if LName == "":
            print()
            print("   Data Entry Error - Customers last name must be entered...")
            print()
        else:
            break

    while True:
        Add = input("Enter the customers address: ")

        if Add == "":
            print()
            print("   Data Entry Error - Customers address must be entered...")
            print()
        else:
            break
        
    while True:
        City = input("Enter the customers city: ").title()

        if City == "":
            print()
            print("   Data Entry Error - Customers city must be entered...")
            print()
        else:
            break

 
    while True:
        Prov = input("Enter the customers province (XX): ").upper()
    
        if Prov == "":
            print("   Data Entry Error - Province cannot be blank...")
        elif len(Prov) != 2:
            print("   Data Entry Error - Provice is a 2 character code only...")
        elif Prov not in PROV_LST:
            print("   Data Entry Error - province is not valid...")
        else:
            break

    while True:
        PostCode = input("Enter the customers postal code (X#X#X#): ")

        if PostCode == "":
            print()
            print("   Data Entry Error - Customers postal code must be entered...")
            print()
        else:
            break
    
    allowed_char = set("1234567890")
    while True:
        Phone = input("Enter the customers phone number (0000000000): ")
    
        if Phone == "":
            print()
            print("   Data Entry Error - Phone number must be entered...")
            print()
        elif set(Phone).issubset(allowed_char) == False:
            print()
            print("   Data Entry Error - invalid characters...")
            print()
        elif len(Phone) != 10:
            print()
            print("   Data Entry Error - Phone number must be 10 characters only...")
            print()
        else:
            Phone = "(" + Phone[0:3] + ")" + " " + Phone[3:6] + "-" + Phone[6:10]
            break

    while True:
        NumCars = input("How many cars is the customer insuring: ")

        if NumCars == "":
            print()
            print("   Data Entry Error - Number of cars must be entered...")
            print()
        else:
            break
    NumCars = int(NumCars)
    while True:
        ExtraLia = input("Would the customer like to purchase extra liability (Y / N): ").upper()

        if ExtraLia == "":
            print()
            print("   Data Entry Error - Y or N must be entered...")
            print()
        else:
            break

    while True:
        GlassCov = input("Would the customer like to purchase glass coverage (Y / N): ").upper()

        if GlassCov == "":
            print()
            print("   Data Entry Error - Y or N must be entered...")
            print()
        else:
            break

    while True:
        LoanerCar = input("Would the customer like a loaner car (Y / N): ").upper()

        if LoanerCar == "":
            print()
            print("   Data Entry Error - Y or N must be entered...")
            print()
        else:
            break

    PayType = ["Full", "Monthly", "Down Pay"]
    while True:
        PayChoice = input("How does the customer want to pay (Full, Monthly, Down Pay): ").title()
    
        if PayChoice == "":
            print()
            print("   Data Entry Error - Payment type must be entered...")
            print()
        elif PayChoice not in PayType:
            print("Data Entry Error - Must be Full, Monthly, Down Pay...")
        else:
            break

    
    if PayChoice == "Down Pay":
        DownPayAmt = input("How much of a down payment is the customer making: ")
    else:
        DownPayAmt = 0


    while True:
        ClaimNum = int(input("Enter the claim number: (XXXXX) "))
        ClaimDate = input("Enter the claim date: (YYYY-MM-DD) ")
        ClaimAmt = float(input("Enter the claim amount: (XXXXX.XX) "))

        Claim_Num_Lst.append(ClaimNum)
        Claim_Date_Lst.append(ClaimDate)
        Claim_Amt_Lst.append(ClaimAmt)      

        AnotherClaim = input("Do you want to add another claim? (yes/no): ").strip().lower()
        if AnotherClaim != "yes":
            break


        # Perform required calculations.


    def Calculate_Insurance_Premium(NumCars, ExtraLia, GlassCov, LoanerCar,                     # Has to be an easier way to make this a function...
    BASIC_PREM, COST_EXT_LIAB_COV, GLASS_COV, LOAN_CAR_COV):                                    # I suppose doing 1 thing and not multiple...
        # Calc premium based on the number of cars being insured
        NumCarsPrem = NumCars - 1
        InsPrem = BASIC_PREM + ((NumCarsPrem * BASIC_PREM) * 0.75)

        # Calc extra costs
        if ExtraLia == "Y":
            ExtraLiaFee = COST_EXT_LIAB_COV
        else:
            ExtraLiaFee = 0

        if GlassCov == "Y":
            GlassCovFee = GLASS_COV
        else:
            GlassCovFee = 0

        if LoanerCar == "Y":
            LoanerCarFee = LOAN_CAR_COV
        else:
            LoanerCarFee = 0

        TotalExtraCosts = ExtraLiaFee + GlassCovFee + LoanerCarFee
        TotalCost = TotalExtraCosts + InsPrem
        return InsPrem + TotalExtraCosts, TotalExtraCosts, InsPrem, ExtraLiaFee, GlassCovFee, LoanerCarFee

    TotalCost, TotalExtraCosts, InsPrem, ExtraLiaFee, GlassCovFee, LoanerCarFee = Calculate_Insurance_Premium( # This was the hardest part to wrap my head around...
        NumCars, ExtraLia, GlassCov, LoanerCar, BASIC_PREM, COST_EXT_LIAB_COV, GLASS_COV, LOAN_CAR_COV)        # But I think I earned the bonus admiration.... maybe :p

    HST = TotalCost * HST_RATE
    TotalCost = float(TotalCost)
    DownPayAmt = float(DownPayAmt)
    def Calculate_Monthly_Payment(TotalCost, DownPayAmt, MONTH_PAY_PROS_FEE):
        # Calculate the monthly payment based on the total cost, down payment amt, and a process fee.

        if DownPayAmt != 0:
            MonthlyPay = ((TotalCost - DownPayAmt) + MONTH_PAY_PROS_FEE) / 8
        else:
            MonthlyPay = (TotalCost + MONTH_PAY_PROS_FEE) / 8

        return MonthlyPay

    MonthlyPay = Calculate_Monthly_Payment(TotalCost, DownPayAmt, MONTH_PAY_PROS_FEE)


    InvoiceDate = FV.FDateS(CUR_DATE)

    def First_Payment():
        # Get the current date
        CUR_DATE = datetime.now()
        
        # Add 30 days with timedelta
        CurDatePlus30 = CUR_DATE + timedelta(days=30)
        
        # Format the date as a string in "YYYY-MM-DD" format
        return CurDatePlus30.strftime("%d-%d-%y") 


    AnotherCustomer = input("Do you want to enter another customer? (yes/no): ").strip().lower()
    if AnotherCustomer != "yes":
        break

        # Display results

print()
print()
print("                 ONE STOP INSURANCE COMPANY                 ")
print("                 ==========================                 ")
print()
print(f"Customer Name: {FName} {LName}    Date: {FV.FDateS(CUR_DATE)}")
print()
print(f"Address:         {Add}                                           ")
print(f"                 {City}, {Prov} {PostCode}                      ")
print()
print(f"Phone:           {Phone}                                           ")
print()
print(f"Number of cars:                         {NumCars}                                           ")
print(f"Insurance Premium:                       {FV.FDollar2(InsPrem)}")
print()
print("Options:                                                     ")
print(f"Extra Liability:                        {ExtraLia}                      ")
print(f"Glass Coverage:                         {GlassCov}                      ")
print(f"Loaner car:                             {LoanerCar}                      ")
print()
print(f"Total Extra Cost:                         {FV.FDollar2(TotalExtraCosts)}")
print(f"HST                                       {FV.FDollar2(HST)}")
print(f"Total Insurance Premium:                {FV.FDollar2(TotalCost)}")
print()
print(f"Payment Type:{PayChoice}     Down Payment: {FV.FDollar2(DownPayAmt)}  ")
print()
print(f"Monthly Payment:                          {FV.FDollar2(MonthlyPay)}")
print()
print("Previous Claims:                                             ")
print()
print(f"        {'Claim #':<10} {'Claim Date':<15} {'Amount':<10}")
print("        ---------------------------------------")
for i in range(len(Claim_Num_Lst)):
    print(f"        {Claim_Num_Lst[i]:<10} {Claim_Date_Lst[i]:<15} ${Claim_Amt_Lst[i]:>10,.2f}")
print("        ---------------------------------------")
print()

