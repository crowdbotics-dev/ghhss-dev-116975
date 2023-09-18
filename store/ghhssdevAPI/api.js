import axios from "axios"
const ghhssdevAPI = axios.create({
  baseURL: "https://ghhss-dev-116975.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return ghhssdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_bvhffh_list(payload) {
  return ghhssdevAPI.get(`/api/v1/bvhffh/`)
}
function api_v1_bvhffh_create(payload) {
  return ghhssdevAPI.post(`/api/v1/bvhffh/`, payload)
}
function api_v1_bvhffh_retrieve(payload) {
  return ghhssdevAPI.get(`/api/v1/bvhffh/${payload.id}/`)
}
function api_v1_bvhffh_update(payload) {
  return ghhssdevAPI.put(`/api/v1/bvhffh/${payload.id}/`, payload)
}
function api_v1_bvhffh_partial_update(payload) {
  return ghhssdevAPI.patch(`/api/v1/bvhffh/${payload.id}/`, payload)
}
function api_v1_bvhffh_destroy(payload) {
  return ghhssdevAPI.delete(`/api/v1/bvhffh/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return ghhssdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return ghhssdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return ghhssdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return ghhssdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return ghhssdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return ghhssdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return ghhssdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return ghhssdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return ghhssdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return ghhssdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return ghhssdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return ghhssdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return ghhssdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_bvhffh_list,
  api_v1_bvhffh_create,
  api_v1_bvhffh_retrieve,
  api_v1_bvhffh_update,
  api_v1_bvhffh_partial_update,
  api_v1_bvhffh_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
