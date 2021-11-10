<template>
    <div>
           <breadcrumb active_name="Services"></breadcrumb>
           <div class="row">
                    <div class="col-lg-12">
                               <div class="card">
                                   <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <h5 class="card-title">Services List <span class="text-muted fw-normal ms-2">({{services.length}})</span></h5>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                                                    <div>
                                                        <a href="#" class="btn btn-light"><i class="bx bx-plus me-1"></i> Add Service</a>
                                                    </div>

                                                    <div class="dropdown">
                                                        <a class="btn btn-link text-muted py-1 font-size-16 shadow-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="bx bx-dots-horizontal-rounded"></i>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <!-- end row -->

                                        <div class="table-responsive mb-4">
                                            <table class="table align-middle datatable dt-responsive table-check nowrap" style="border-collapse: collapse; border-spacing: 0 8px; width: 100%;">
                                                <thead>
                                                <tr>
                                                    <th scope="col" style="width: 50px;">
                                                        <div class="form-check font-size-16">
                                                            <input type="checkbox" class="form-check-input" id="checkAll">
                                                            <label class="form-check-label" for="checkAll"></label>
                                                        </div>
                                                    </th>
                                                    <th scope="col">Name</th>
                                                    <th style="width: 80px; min-width: 80px;">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <div class="form-check font-size-16">
                                                                <input type="checkbox" class="form-check-input" id="contacusercheck1">
                                                                <label class="form-check-label" for="contacusercheck1"></label>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <span>
                                                                
                                                            </span>
                                                        </td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                            <!-- end table -->
                                        </div>
                                        <!-- end table responsive -->
                                   </div>
                               </div>
                     </div>
                </div>
            </div> <!-- container-fluid -->
        </div>
        <!-- End Page-content -->
    </div>
</template>

<script>
import breadcrumb from '../../components/breadcrumbComponent';
    export default {
        components:{breadcrumb},
        data(){
            return{
                services:[],
            };
        },
    }
</script>

<style scoped>

</style>
