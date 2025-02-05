using BlazorWasm.Toastr.Services;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Threading.Tasks;

namespace BlazorWasmJSInteropExamples
{
	public class Program
	{
		public static async Task Main(string[] args)
		{
			var builder = WebAssemblyHostBuilder.CreateDefault(args);
			builder.RootComponents.Add<App>("#app");

			builder.Services.AddBlazorToastr();
			await builder.Build().RunAsync();
		}
	}
}
