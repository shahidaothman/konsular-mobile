export interface ObjectAnyType {
  [key: string]: any;
}

interface UserForeigner {
  country_passport: string;
  created_at: string;
  deleted_at: null | string;
  id: number;
  no_passport: number;
  updated_at: string;
}

export interface UserProfileData {
  id: number;
  user_id: number;
  title: string;
  gender: string;
  father_name: string;
  mother_name: string;
  b_certificate_no: number;
  b_certificate_place: string;
  b_certificate_date: string;
  identity_card_no_new: number;
  identity_card_no_old: number;
  place_mkad_issue: string;
  passport_issue_date: string;
  holder_of_passport: string;
  passport_expired_date: string;
  dob: string;
  nationality: string;
  user_image: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  username: string;
  created_at: string;
  deleted_at: null | string;
  email: string;
  entity_id: number;
  entity_type: string;
  id: number;
  is_login: number;
  last_login_date: null | string;
  last_login_ip: null | string;
  last_logout_date: null | string;
  name: string;
  phone: null | string;
  picture_url: string | null;
  picture_url_passport: string | null;
  updated_at: string;
  user_status_id: number;
  user_type_id: number;
  user_foreigner: UserForeigner;
  user_profile_data: UserProfileData;
}

export interface GoodConductDetails {
  // personal details
  title: string | null;
  name: string | null;
  nationality: number | null;
  gender: number | null;
  ci_street1: string | null;
  ci_street2: string | null;
  ci_street3: string | null;

  app_purpose1: string | null;
  app_purpose2: string | null;
  app_purpose3: string | null;
  app_purpose4: string | null;
  app_purpose5: string | null;
  app_purpose6: string | null;
  app_purpose6_other: string | null;
  app_require_cert: string | null;
  appeal_id: string | null;
  appeal_status: string | null;
  birth_date: string | null;
  cert_get_type: string | null;
  ci_email: string | null;
  ci_phone_noh: string | null;
  ci_phone_nom: string | null;
  ci_postcode: string | null;
  ci_country: number | null;
  ci_state: string | null;
  ci_district: string | null;
  created_at: string | null;
  created_by: number | null;
  ei_country: number | null;
  ei_district: number | null;
  ei_employer: string | null;
  ei_occupation: string | null;
  ei_postcode: string | null;
  ei_state: number | null;
  ei_street1: string | null;
  ei_street2: string | null;
  ei_street3: string | null;
  father_name: string | null;
  filing_status_id: number | null;
  filing_status_id_d4: number | null;
  filing_status_id_e6: number | null;
  filing_status_id_konsular: number | null;
  filing_status_id_r5: number | null;
  first_time_submit_date: string | null;
  form_id: string | null;
  hei_country: string | null;
  hei_district: string | null;
  hei_end_edu: string | null;
  hei_institution: string | null;
  hei_postcode: string | null;
  hei_start_edu: string | null;
  hei_state: string | null;
  hei_street1: string | null;
  hei_street2: string | null;
  hei_street3: string | null;
  ic_new: string | null;
  ic_old: string | null;
  id: number | null;
  info_type1: string | null;
  info_type2: string | null;
  konsular_accept_date: string | null;
  konsular_decision_at: string | null;
  konsular_decision_by: string | null;
  malawakil_decision_at: string | null;
  malawakil_decision_by: string | null;
  mother_name: string | null;
  mykad_issued: string | null;
  passport_expired_date: string | null;
  passport_holder: string | null;
  passport_issued_date: string | null;
  passport_no: string | null;
  pdrm_d4_decision_at: string | null;
  pdrm_d4_decision_by: string | null;
  pdrm_e6_decision_at: string | null;
  pdrm_e6_decision_at_fromformfield: string | null;
  pdrm_e6_decision_by: string | null;
  pdrm_r5_decision_at: string | null;
  pdrm_r5_decision_by: string | null;
  picture_url: string | null;
  picture_url_passport: string | null;
  pos_tracking_no: string | null;
  reason_d4: string | null;
  reason_e6: string | null;
  reason_konsular: string | null;
  reason_malawakil: string | null;
  reason_r5: string | null;
  submission_id: string | null;
  submitted_at: string | null;
  submitted_by: string | null;
  support_document1: string | null;
  updated_at: string | null;
  updated_by: string | null;
  work_exp: string | null;
}

export interface Country {
  code: string;
  created_at: string;
  embassy_id: string | number | null;
  id: number;
  name: string;
  updated_at: string;
}

export interface AppError {
  code: number;
  error: string;
}

export interface Purpose {
  id: number;
  value: string;
}

export interface AppSuccess {
  status: boolean;
  data: any;
}

export interface AppRes {
  status: boolean;
  data?: any;
  error?: string;
}

export interface States {
  id: number;
  name: string;
  country_id: number;
}
