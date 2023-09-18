import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bvhffh_list = createAsyncThunk(
  "bvhffhs/api_v1_bvhffh_list",
  async payload => {
    const response = await apiService.api_v1_bvhffh_list(payload)
    return response.data
  }
)
export const api_v1_bvhffh_create = createAsyncThunk(
  "bvhffhs/api_v1_bvhffh_create",
  async payload => {
    const response = await apiService.api_v1_bvhffh_create(payload)
    return response.data
  }
)
export const api_v1_bvhffh_retrieve = createAsyncThunk(
  "bvhffhs/api_v1_bvhffh_retrieve",
  async payload => {
    const response = await apiService.api_v1_bvhffh_retrieve(payload)
    return response.data
  }
)
export const api_v1_bvhffh_update = createAsyncThunk(
  "bvhffhs/api_v1_bvhffh_update",
  async payload => {
    const response = await apiService.api_v1_bvhffh_update(payload)
    return response.data
  }
)
export const api_v1_bvhffh_partial_update = createAsyncThunk(
  "bvhffhs/api_v1_bvhffh_partial_update",
  async payload => {
    const response = await apiService.api_v1_bvhffh_partial_update(payload)
    return response.data
  }
)
export const api_v1_bvhffh_destroy = createAsyncThunk(
  "bvhffhs/api_v1_bvhffh_destroy",
  async payload => {
    const response = await apiService.api_v1_bvhffh_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bvhffhsSlice = createSlice({
  name: "bvhffhs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_bvhffh_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvhffh_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvhffh_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvhffh_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvhffh_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvhffh_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvhffh_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvhffh_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvhffh_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvhffh_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvhffh_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvhffh_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvhffh_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvhffh_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvhffh_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvhffh_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_bvhffh_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_bvhffh_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_bvhffh_list,
  api_v1_bvhffh_create,
  api_v1_bvhffh_retrieve,
  api_v1_bvhffh_update,
  api_v1_bvhffh_partial_update,
  api_v1_bvhffh_destroy,
  slice: bvhffhsSlice
}
