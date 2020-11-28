mod utils;
mod solution;

use wasm_bindgen::prelude::*;
use js_sys::Array;


// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn run_solution(input_txt_string: String) -> Array {
    // Lots of magic going in here...
    return solution::run(input_txt_string).into_iter().map(JsValue::from).collect();
}
