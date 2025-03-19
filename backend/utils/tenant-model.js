import mongoose from 'mongoose';
const TenantSchema = new mongoose.Schema(
    {
        property: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Property",
            required: true,
        },
        roomNumber: { type: Number, required: true },
        signInDate: { type: Date, required: true },
        signOutDate: { type: Date },
        dateOfAssessment: { type: Date, required: true },
        preferredArea: { type: String },
        ethnicOrigin: {
            type: String,
            enum: [
                "White: British",
                "White: Irish",
                "White: Other",
                "Mixed: White & Black Caribbean",
                "Mixed: White & Black African",
                "Mixed: White & Asian",
                "Mixed: Other",
                "Asian/Asian British: Indian",
                "Asian/Asian British: Pakistani",
                "Asian/Asian British: Bangladeshi",
                "Asian/Asian British: Other",
                "Black/Black British: Caribbean",
                "Black/Black British: African",
                "Black/Black British: Other",
                "Chinese/Other Ethnic Group",
                "Other",
                "Refuse to say",
            ],
        },
        religion: {
            type: String,
            enum: [
                "No religion/Atheist",
                "Muslim",
                "Christian (all denominations)",
                "Sikh",
                "Buddhist",
                "Hindu",
                "Jewish",
                "Other",
                "Prefer not to say",
            ],
        },
        sexualOrientation: {
            type: String,
            enum: [
                "Heterosexual",
                "Homosexual",
                "Lesbian",
                "Transgender",
                "Bisexual",
                "Prefer not to say"
            ],
        },

        sourceOfIncome: { type: String },
        benefits: { type: String },
        totalAmount: { type: Number },
        paymentFrequency: { type: String },

        debts: { type: Boolean, required: true },
        debtDetails: { type: String },
        gamblingIssues: { type: Boolean },
        gamblingDetails: { type: String },
        criminalRecords: { type: Boolean },
        offenceDetails: {
            nature: String,
            date: Date,
            sentence: String,
        },

        supportNeeds: [{ type: String }],
        fullCheckCompleted: { type: Boolean, required: true },

        physicalHealthConditions: { type: Boolean },
        mentalHealthConditions: { type: Boolean },
        diagnosedMentalHealth: { type: Boolean },
        legalStatus: { type: String },
        prescribedMedication: { type: Boolean },
        selfHarmOrSuicidalThoughts: { type: Boolean },
        prisonHistory: { type: Boolean },
        legalOrders: { type: Boolean },

        benefitsClaimed: { type: String },
        drugUse: { type: Boolean },
        riskAssessment: [{ type: String }],

        familySupport: { type: Boolean },
        supportWorkerSignature: { type: String },
        tenantSignature: { type: String },

        personalDetails: {
            title: String,
            firstName: { type: String, required: true },
            middleName: String,
            lastName: { type: String, required: true },
            nationalInsuranceNumber: { type: String, required: true },
            maritalStatus: { type: String, required: true },
            height: Number,
            shoeSize: Number,
            clothingSize: String,
            eyeColor: String,
            gender: { type: String, required: true },
            contactNumber: String,
            email: String,
            signupEmail: String,

            claimReferenceNumber: String,
            skinTone: String,
            hairColor: String,
            dateOfBirth: { type: Date, required: true },
            placeOfBirth: String,
            currentSituation: String,

            hasVehicle: { type: Boolean },
            distinguishingMarks: { type: Boolean },
            employerOrCollegeDetails: { type: Boolean },
            movedLast12Months: { type: Boolean },
            enteredUKLast2Years: { type: Boolean },
            partnerLivingWithYou: { type: Boolean },

            bereavementOrSeparation: { type: Boolean },
            relevantCircumstances: { type: Boolean },
            rentAffordableWhenMoved: { type: Boolean },
            multiAgencyProtectionPlan: { type: Boolean },

            homelessHostelFor3Months: { type: Boolean },
            nextOfKinInfo: { type: Boolean },
            gpInfo: { type: Boolean },
            requireNilIncomeForm: { type: Boolean },

            claimBackdated: { type: Boolean },
            otherCharges: { type: String },
            shelteredAccommodation: { type: Boolean },

            photoUploaded: { type: Boolean },
            proofOfBenefitUploaded: { type: Boolean },
            studentStatus: { type: Boolean },
            incapableOfWork: { type: Boolean },
            registeredBlind: { type: Boolean },

            carerAllowanceReceived: { type: Boolean },
            overnightCareRequired: { type: Boolean },
            fosterCarer: { type: Boolean },
            currentlyAbsentFromHome: { type: Boolean },
            claimedHousingBenefitBefore: { type: Boolean },

            expectedIncomeChangeNext6Months: { type: Boolean },
            expectedExpenseChangeNext6Months: { type: Boolean },
            ukEntryDate: { type: Date },
        },

        // termsAndConditions: {
        //     supportChecklist: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     licenseToOccupy: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     weeklyServiceCharge: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     missingPersonForm: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     tenantPhotographicID: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     personalDetailsAgreement: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     licenseChargePayments: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     fireEvacuationProcedure: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     supportAgreement: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     complaintsProcedure: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     confidentialityWaiver: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     nilIncomeFormAgreement: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     authorizationForm: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     supportServices: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        //     staffAgreement: {
        //         agreed: { type: Boolean },
        //         signature: { type: String },
        //     },
        // },

        // New fields
        addedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        st: {
            type: Number,
            enum: [0, 1],
            default: 1
        },
    }, { timestamps: true }
);

const Tenant = mongoose.model("Tenant", TenantSchema);
export default Tenant;