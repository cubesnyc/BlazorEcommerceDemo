using BlazorEcommerce.Server.Services.ProductService;
using Microsoft.AspNetCore.Mvc;

namespace BlazorEcommerce.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private readonly IProductService productService;

        public ProductController(IProductService productService)
        {

            this.productService = productService;
        }

        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<Product>>>> GetProducts()
        {
            var response = await productService.GetProductsAsync();
            return Ok(response);
        }
    }
}
