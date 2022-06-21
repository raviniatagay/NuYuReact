import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartners = () => {
    console.log('in method');
    return PARTNERS;
};

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
};